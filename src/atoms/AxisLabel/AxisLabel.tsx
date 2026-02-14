import { FC, PropsWithChildren, RefObject, useEffect, useRef } from "react";
import './AxisLabel.css';

const AxisLabel: FC<PropsWithChildren<{
    areaRef: RefObject<HTMLDivElement | null>,
    heightPx: number,
    widthPx: number,
    row: 0 | 1 | 2 | 3 | 4,
    heightOffset: number
}>> = ({
    areaRef,
    heightPx,
    widthPx,
    children,
    row,
    heightOffset
}) => {
        const labelRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const label = labelRef.current;
            const area = areaRef.current;
            if (!label || !area) return;
            const selfBottomOffset = (label.offsetHeight * row);
            const selfBottom = heightPx - selfBottomOffset;
            label.style.bottom = `${selfBottom - (heightOffset || 0)}px`;

            if ((widthPx - label.offsetWidth) < 0) {
                label.style.left = `${widthPx}px`;
            } else {
                label.style.left = `${(widthPx - label.offsetWidth)}px`;
            }



        }, [heightPx, widthPx, row, areaRef, heightOffset])

        return (
            <div
                className="AxisLabel"
                ref={labelRef}
                style={{
                    left: 0,
                    bottom: 0,
                }}
            >
                {children}
            </div>
        )
    }

export default AxisLabel;