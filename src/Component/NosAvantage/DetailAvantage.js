import React, {useState} from "react";
import ViewContent from "../../FunctionComponent/ViewContent";

const DetailAvantage = ({image, title, text, index = 0, reverse = false}) => {
    const [view, setView] = useState(false);
    const num = String(index + 1).padStart(2, '0');
    return(
        <ViewContent
            className={`av-row ${reverse ? 'av-row-reverse' : ''} ${view ? '' : 'invisible'}`}
            time={80}
            setIsVisible={setView}
        >
            <div className="av-row-media">
                <img src={image} draggable={"false"} decoding={"async"} title={title} alt={title}/>
            </div>
            <div className="av-row-content">
                <span className="av-row-num">{num}</span>
                <h3 className="av-row-title">{title}</h3>
                <p className="av-row-text">{text}</p>
            </div>
        </ViewContent>
    )
}

export default DetailAvantage
