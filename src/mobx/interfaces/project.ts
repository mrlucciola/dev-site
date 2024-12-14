import { slugify } from "../../util/slugify";

/** @deprecated remove/replace with zod schema */
export type IUrl = `${"https://" | "http://"}${string}` | url;
enum url {}

/**
 * @deprecated create enum for keys
 * @deprecated (possibly unnecessary) create enum for values
 */
type IProjectStack = Map<string, string[]>;

/** @deprecated remove/replace with zod schema */
export type IImg = `/images/${string}${`.png`}` | imgType;
enum imgType {}

/** @deprecated convert to zod schema */
export class Project {
  constructor(
    public title: string,
    public description: string,
    public stack: IProjectStack,
    public repo: IUrl,
    public img?: IImg,
    public site?: IUrl,
    public diagram?: string
  ) {}
  /** @deprecated this is used as a slug and CSS id/classname - a kebab-case version of the title */
  get id(): string {
    return slugify(this.title);
  }
}
