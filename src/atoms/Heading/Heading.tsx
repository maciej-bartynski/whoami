import { createElement, forwardRef } from "react";
import { HeadingProps } from "./Heading.types";

const tagByLevel: Record<HeadingProps["h"], "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({
    h,
    children,
    ...attr
}, ref) => {
    const Tag = tagByLevel[h];
    return createElement(Tag, { ...attr, ref }, children);
});

Heading.displayName = "Heading";

export default Heading;