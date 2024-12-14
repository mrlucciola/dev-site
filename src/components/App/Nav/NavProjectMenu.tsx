import { FC, useRef, useState, useEffect, SyntheticEvent, KeyboardEvent } from "react";
// mui
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// data
import { projectsForDisplay, projectsLookup } from "../../../projectConfigs";

/** ### Navbar `Project` element
 * A single tab button which navigates user to a given project on click.
 */
const NavProjectMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // refs
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpenRef = useRef(isOpen);
  // event handlers
  const handleMenuToggle = () => setIsOpen((prevOpen) => !prevOpen);

  const handleMenuClose = (e: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(e.target as HTMLElement)) {
      return;
    }

    setIsOpen(false);
  };
  const handleMenuKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setIsOpen(false);
    } else if (e.key === "Escape") {
      // @note does this also need `e.preventDefault();`
      setIsOpen(false);
    }
  };

  // @todo implement nav-to-card functionality
  // const onClickNavToCard = useCallback(
  //   (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //     e.preventDefault();
  //     // e.currentTarget
  //     const newProjectIdx = 0;
  //     setActiveProjectIdx(newProjectIdx, "");
  //     project.ref!.current!.scrollIntoView();
  //   },
  //   [project.ref]
  // );

  // Effects
  useEffect(() => {
    // return focus to the button when we transitioned from !open -> open
    if (prevOpenRef.current === true && isOpen === false) {
      anchorRef.current!.focus();
    }

    prevOpenRef.current = isOpen;
  }, [isOpen]);

  const menuItemElems = projectsForDisplay.map((p) => {
    const project = projectsLookup[p];

    return (
      <MenuItem onClick={handleMenuClose} key={p}>
        <Link component="a" href={`#${project.slug}`}>
          {project.title}
        </Link>
      </MenuItem>
    );
  });

  return (
    <>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={isOpen ? "composition-menu" : undefined}
        aria-expanded={isOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleMenuToggle}
      >
        Portfolio Projects
      </Button>
      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 2 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <MenuList
                  autoFocusItem={isOpen}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleMenuKeyDown}
                >
                  {menuItemElems}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default NavProjectMenu;
