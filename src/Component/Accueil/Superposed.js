import React, {useEffect, useState} from "react";
import outsourcing from "../../Asset/outsourcing.jpg";
import off from "../../Asset/pin.jpg";
import localisation from "../../Asset/localisation.jpg";
import {useMediaQuery} from "react-responsive";

const Superposed = ({large=false, t}) => {
    const [activeDiv, setActiveDiv] = useState(1);

    useEffect(() => {
        if (!large) {
            const interval = setInterval(() => {
                setActiveDiv((prevDiv) => (prevDiv === 1 ? 2 : 1));
            }, 3500);
            return () => clearInterval(interval);
        }
    }, [large]);
    const wMax = useMediaQuery({ query: "(max-width: 1008px) and (min-width: 923px)" });
    const hMin = useMediaQuery({ query: "(max-width: 1218px)" });
    return(
        <>
            {large ? (''): (
                <>
                    <div className={`shadow-lg bg-gradient-info-dark transition-all ${activeDiv === 1 ? "z-2" : "z-1"}`} style={{width: wMax ? "80%" : '70%', height: hMin ? '310px' : "370px", position: "absolute", transform: activeDiv === 1 ? "rotate(0deg)" : "rotate(10deg) scale(1.04) translateX(2rem)", transition: "all 1s ease-in-out"}}>
                        <img draggable="false" decoding={"async"} src={outsourcing} className="w-100" alt="outsourcing"/>
                        <div className="w-100 mt-3 text-center ">
                    <span className="text-white fw-bold px-1" style={{ lineHeight: "1.85rem", fontSize: "1.85rem", letterSpacing: "0.1rem" }}>
                        {t('deleg')}
                    </span>
                        </div>
                    </div>

                    <div className={`shadow bg-gradient-info transition-all ${activeDiv === 2 ? "z-2" : "z-1"}`} style={{width: wMax ? "80%" : '70%', height: hMin ? '310px' : "370px", position: "absolute", transform: activeDiv === 2 ? "rotate(0deg)" : "rotate(10deg) scale(1.04) translateX(2rem)", transition: "all 1s ease-in-out"}}>
                        <img draggable="false" decoding={"async"} src={off} className="w-100" alt="pin"/>
                        <div className="w-100 mt-3 text-center">
                    <span className="text-danger fw-bold" style={{ lineHeight: "1.85rem", fontSize: "1.85rem", letterSpacing: "0.1rem" }}>
                        {t('centre')}
                    </span>
                        </div>
                        <div className="position-absolute bottom-0 w-100 d-flex justify-content-center pb-2">
                            <img draggable="false" decoding={"async"} src={localisation} width={40} alt="img-pin"/>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default Superposed