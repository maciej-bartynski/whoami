import { forwardRef, useCallback, useState } from "react";
import type { ComponentPropsWithRef } from "react";

export type HoveringDivProps = {
    onHover: () => void;
    onHoverEnd: () => void;
    withPermanentSelection?: boolean;
} & Omit<ComponentPropsWithRef<"div">, "onMouseEnter" | "onMouseLeave">;

const HoveringDiv = forwardRef<HTMLDivElement, HoveringDivProps>(({
    onHover,
    onHoverEnd,
    children,
    withPermanentSelection,
    ...attr
}, ref) => {
    const [permanentlySelected, setPermanentlySelected] = useState(false);

    const _onClick: React.MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        console.log("1")
        attr?.onClick?.(e);
        console.log("2")
        if (withPermanentSelection) {
            console.log("3")
            setPermanentlySelected(state => !state);
        } else {
            console.log("4")
        }
    }, [attr, withPermanentSelection]);

    return (
        <div
            {...attr}
            onClick={_onClick}
            ref={ref}
            onMouseEnter={onHover}
            onMouseLeave={permanentlySelected ? () => {
                console.log('selected')
            } : onHoverEnd}
        >
            {children}
        </div>
    );
});

HoveringDiv.displayName = "HoveringDiv";

export default HoveringDiv;