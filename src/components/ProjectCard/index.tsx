import { FC } from "react";
// mui
import Stack from "@mui/material/Stack";
import ListItem, { type ListItemProps } from "@mui/material/ListItem";
// components
import Header from "./Header";
import Body from "./Body";
// state
import { useAppCtx } from "../App/AppProvider";
// interfaces
import { type ProjectKey } from "../../projectConfigs";

/** ### Project view
 * Display component showing information about a single project.
 *
 * Consists of a header, image, description, and stack.\
 * Sets a ref in order to call "scrollTo..." within NavProjects.\
 * This ref is stored in MobX state.
 */
const ProjectCard: FC<ListItemProps & { projectKey: ProjectKey }> = ({
  projectKey,
  sx,
  children,
  ...listItemProps
}) => {
  // state: observables
  const activeProjectKey = useAppCtx((s) => s.activeProjectKey);
  const setActiveProjectKey = useAppCtx((s) => s.setActiveProjectKey);
  const activeProjectSlug = useAppCtx((s) => s.activeProject.id);

  const isActive = projectKey === activeProjectKey;

  // event handlers
  const onEventActivateProject = () => !isActive && setActiveProjectKey(projectKey);
  // @todo add additional state+event handler for `hovered` (inactive + hovered)

  return (
    <ListItem
      direction="column"
      component={Stack}
      onScroll={onEventActivateProject}
      onMouseOver={onEventActivateProject}
      // @todo fix - this is a css `id` identifier being used in for class
      className={`#${activeProjectSlug}`}
      id={activeProjectSlug}
      sx={{ mh: 5, minWidth: "100%", flex: 1 }}
      {...listItemProps}
    >
      <Header projectKey={projectKey} />
      <Body projectKey={projectKey} />
    </ListItem>
  );
};

export default ProjectCard;
