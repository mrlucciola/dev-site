// state
import { computed, makeAutoObservable } from "mobx";
import { Project, ObjKey } from "../types";
// stores
import { RootStore } from "../context";

/// Main
export class MainStore {
  root: RootStore;
  // ctor
  constructor(rootStore: RootStore) {
    this.root = rootStore;
    // init
    makeAutoObservable(
      this,
      {
        projects: computed,
      },
      { autoBind: true }
    );
  }

  // PROJECTS
  private _projects: Project[] = [];
  get projects(): Project[] {
    return this._projects;
  }
  setProjects(newProjectsArr: Project[]) {
    this._projects = newProjectsArr;
  }
  // ACTIVE PROJECT ID
  private _activeProjectId: ObjKey = 0;
  get activeProjectId(): ObjKey {
    return this._activeProjectId;
  }
  setActiveProjectId(id: ObjKey) {
    this._activeProjectId = id;
  }

  // actions
}
