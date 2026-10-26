import React, {useEffect, useState} from "react";
import outsourcing from "../../Asset/outsourcing.jpg";
import off from "../../Asset/pin.jpg";
import localisation from "../../Asset/localisation.jpg";

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
    return(
        <>
            {large ? (''): (
                <div className="ac-stack">
                    <div className={`ac-stack-card ${activeDiv === 1 ? "is-front" : "is-back"}`}>
                        <div className="ac-stack-media" style={{ "--stack-photo": `url(${outsourcing})` }}>
                            <img draggable="false" decoding={"async"} src={outsourcing} className="ac-stack-img" alt="outsourcing"/>
                        </div>
                        <div className="ac-stack-label ac-stack-label-blue">
                            {t('deleg')}
                        </div>
                    </div>

                    <div className={`ac-stack-card ${activeDiv === 2 ? "is-front" : "is-back"}`}>
                        <div className="ac-stack-media" style={{ "--stack-photo": `url(${off})` }}>
                            <img draggable="false" decoding={"async"} src={off} className="ac-stack-img" alt="pin"/>
                        </div>
                        <div className="ac-stack-label ac-stack-label-pink">
                            <span>{t('centre')}</span>
                            <span className="ac-stack-pin">
                                <img draggable="false" decoding={"async"} src={localisation} alt="img-pin"/>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Superposed
