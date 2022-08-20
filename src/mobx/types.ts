export type Url = `${"https://" | "http://"}${string}` | url;
enum url {}

// export type Stack = {
//   [Key in string | number | symbol]: string[];
// };
export type Stack = Map<ObjKey, string[]>;

export type ObjKey = string | number | symbol | objKey;
enum objKey {}

export type Img = `/images/${string}${`.png`}` | imgType;
enum imgType {}

export class Project {
  title: string;
  description: string;
  stack: Stack;
  img: Img;
  repo: Url;
  site?: Url;

  constructor(
    title: string,
    description: string,
    stack: Stack,
    img: Img,
    repo: Url,
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
