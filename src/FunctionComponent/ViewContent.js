import React, { useEffect, useRef} from "react";

const ViewContent = ({children,time,setIsVisible, className = '', style={}}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            if (elementRef.current) {
                const top = elementRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (top < windowHeight) {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        setIsVisible(true);
                    }, time);
                } else {
                    setIsVisible(false);
                    clearTimeout(timeoutId);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);


    return(
        <div className={className} ref={elementRef} style={style}>
            {children}
        </div>
    )
}
export default ViewContent