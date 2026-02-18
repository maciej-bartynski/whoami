import { HeadingLevel } from "./Heading.types";

export const normalizeH = (_h: number): HeadingLevel => {
    const h = Math.round(_h) as HeadingLevel;
    if (h > 6) return 6;
    if (h < 1) return 1;
    return h;
}