import type { ComponentPropsWithRef } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
    h: HeadingLevel;
} & ComponentPropsWithRef<"h1">;

export type {
    HeadingLevel
}