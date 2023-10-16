import {
  FC,
  useRef,
  useState,
  useEffect,
  forwardRef,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  Ref,
  KeyboardEvent,
} from "react";
// mui
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// state
import { observer } from "mobx-react-lite";
import { useMainStore } from "../../mobx/stores";

const ProjectMenuList: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleMenuClose: (e: Event | SyntheticEvent) => void;
  ref: Ref<HTMLButtonElement>;
}> = forwardRef(({ isOpen, setIsOpen, handleMenuClose }, _ref) => {
  // state
  const projects = useMainStore((s) => s.projects);
  // event handlers
  const handleMenuKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setIsOpen(false);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };
  // build
  const menuItemElems = projects.map((p, idx) => (
    <MenuItem onClick={handleMenuClose} key={idx}>
      {p.title}
    </MenuItem>
  ));

  return (
    <MenuList
      autoFocusItem={isOpen}
      id="composition-menu"
      aria-labelledby="composition-button"
      onKeyDown={handleMenuKeyDown}
    >
      {menuItemElems}
    </MenuList>
  );
});

/** ### Navbar `Project` element
 * A single tab button which navigates user to a given project on click.
 */
const NavProjectMenu: FC = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);
  // refs
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpenRef = useRef(isOpen);
  // event handlers
  const handleMenuToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  const handleMenuClose = (e: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(e.target as HTMLElement)
    ) {
      return;
    }

    setIsOpen(false);
  };

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

  // effects
  useEffect(() => {
    // return focus to the button when we transitioned from !open -> open
    if (prevOpenRef.current === true && isOpen === false) {
      anchorRef.current!.focus();
    }

    prevOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={isOpen ? "composition-menu" : undefined}
        aria-expanded={isOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleMenuToggle}
        onMouseOver={() => {
          setIsOpen(true);
        }}
        onMouseOut={() => {
          setIsOpen(false);
          prevOpenRef.current = false;
        }}
      >
        Portfolio
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
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <ProjectMenuList
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  handleMenuClose={handleMenuClose}
                  ref={anchorRef}
                />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default observer(NavProjectMenu);
