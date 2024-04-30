import {RefObject} from "react";

export default function animation(target: RefObject<HTMLDivElement>, delay: number, threshold: number = 0.2) {
    let observer: IntersectionObserver;
    if (!target?.current) {
        return null
    }
    const currentTarget = target.current!
    currentTarget.style.transition = `all 1s`
    currentTarget.style.transitionDelay = `${delay}s`;
    currentTarget.style.alignContent = `right`;

    observer = new IntersectionObserver(
        ([e]) => {
            if (currentTarget === e.target as HTMLElement) {
                if (e.isIntersecting) {
                    currentTarget.style.opacity = "1";
                    currentTarget.style.transform = "translateZ(0)";
                } else {
                    currentTarget.style.opacity = "0";
                    currentTarget.style.transform = "translate3d(0, 100%, 0)";
                }
            }
        },
        {threshold: threshold}
    );
    observer.observe(target.current as Element);
}