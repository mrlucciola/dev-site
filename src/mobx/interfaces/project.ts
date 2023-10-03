import { RefObject } from "react";

export type Url = `${"https://" | "http://"}${string}` | url;
enum url {}

type IProjectStackMap = Map<string, string[]>;

export type Img = `/images/${string}${`.png`}` | imgType;
enum imgType {}

export class Project {
  constructor(
    public title: string,
    public description: string,
    public stack: IProjectStackMap,
    public repo: Url,
    public img?: Img,
    public site?: Url,
    public ref?: RefObject<HTMLDivElement>
  ) {}
}
