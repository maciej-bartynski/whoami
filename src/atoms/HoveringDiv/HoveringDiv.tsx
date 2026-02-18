import { FC, PropsWithChildren } from "react";

const HoveringDiv: FC<PropsWithChildren<{
    onHover: () => void,
    onHoverEnd: () => void
}>> = ({ children, onHover, onHoverEnd }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default HoveringDiv