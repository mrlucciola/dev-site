import { RefObject } from "react";

export type Url = `${"https://" | "http://"}${string}` | url;
enum url {}

type IProjectStack = Map<ObjKey, string[]>;

export type ObjKey = string | number | symbol | objKey;
enum objKey {}

export type Img = `/images/${string}${`.png`}` | imgType;
enum imgType {}

export class Project {
  title: string;
  description: string;
  stack: IProjectStack;
  repo: Url;
  img?: Img;
  site?: Url;
  ref?: RefObject<HTMLDivElement>;

  constructor(
    title: string,
    description: string,
    stack: IProjectStack,
    repo: Url,
    img?: Img,
    site?: Url
  ) {
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.img = img;
    this.repo = repo;
    this.site = site;
  }
}
