import React, {useState} from "react";
import ViewContent from "../../FunctionComponent/ViewContent";
import {FaRegCircleDot} from "react-icons/fa6";

const H4Avantage = ({text}) => {
    const [view, setView] = useState(false);
    return (
        <ViewContent setIsVisible={setView} time={100} className="av-group-head">
            <span className={`av-group-icon ${view ? 'showTop' : 'invisible'}`}>
                <FaRegCircleDot size={16}/>
            </span>
            <h4 className={`av-group-title ${view ? 'showTop' : 'invisible'}`}>{text}</h4>
            <span className="av-group-line"/>
        </ViewContent>
    )
}

export default H4Avantage
