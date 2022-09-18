// react
import { RefObject } from "react";
// state
import { makeAutoObservable } from "mobx";
import { Project, ObjKey } from "../types";
// stores
import { RootStore } from "../context";

/** Main store
 */
export class MainStore {
  /////////////////////////////////////////////////////////
  ///////////////////////// STORES ////////////////////////
  root: RootStore;
  ///////////////////////// STORES ////////////////////////
  /////////////////////////////////////////////////////////

  // ctor
  constructor(rootStore: RootStore) {
    // init
    this.root = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  /////////////////////////////////////////////////////////
  ////////////////////// OBSERVABLES //////////////////////
  private _projects: Project[] = [];
  private _activeProjectId: ObjKey = 0;
  ////////////////////// OBSERVABLES //////////////////////
  /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  /////////////////////// COMPUTEDS ///////////////////////
  get projects(): Project[] {
    return this._projects;
  }
  get activeProjectId(): ObjKey {
    return this._activeProjectId;
  }
  /////////////////////// COMPUTEDS ///////////////////////
  /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  //////////////////////// ACTIONS ////////////////////////
  setProjects(newProjectsArr: Project[]) {
    this._projects = newProjectsArr;
  }
  setProjectRef(projectId: number, projectRef: RefObject<HTMLDivElement>) {
    this._projects[projectId].ref = projectRef;
  }
  setActiveProjectId(id: ObjKey) {
    this._activeProjectId = id;
  }
  //////////////////////// ACTIONS ////////////////////////
  /////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  //////////////////////// HELPERS ////////////////////////
  //////////////////////// HELPERS ////////////////////////
  /////////////////////////////////////////////////////////
}
