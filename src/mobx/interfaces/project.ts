import { RefObject } from "react";

export type IUrl = `${"https://" | "http://"}${string}` | url;
enum url {}

type IProjectStack = Map<string, string[]>;

export type IImg = `/images/${string}${`.png`}` | imgType;
enum imgType {}

export class Project {
  constructor(
    public title: string,
    public description: string,
    public stack: IProjectStack,
    public repo: IUrl,
    public img?: IImg,
    public site?: IUrl,
    public ref?: RefObject<HTMLDivElement>,
    public diagram?: string
  ) {}
}
