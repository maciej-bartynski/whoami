import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";

export type HoveringDivProps = {
    onHover: () => void;
    onHoverEnd: () => void;
} & Omit<ComponentPropsWithRef<"div">, "onMouseEnter" | "onMouseLeave">;

const HoveringDiv = forwardRef<HTMLDivElement, HoveringDivProps>(({
    onHover,
    onHoverEnd,
    children,
    ...attr
}, ref) => {
    return (
        <div
            {...attr}
            ref={ref}
            onMouseEnter={onHover}
            onMouseLeave={onHoverEnd}
        >
            {children}
        </div>
    );
});

HoveringDiv.displayName = "HoveringDiv";

export default HoveringDiv;