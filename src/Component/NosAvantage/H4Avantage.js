import React, {useState} from "react";
import ViewContent from "../../FunctionComponent/ViewContent";

const H4Avantage = ({text, isWidthMax = true}) => {
    const [view, setView] = useState(false);
    return (
        <ViewContent setIsVisible={setView} time={100} className="border-aris text-start p-0 mx-3 my-0">
            <h4 className={`p-2 m-0 text-aris title pb-3 display-6 ${isWidthMax ? 'width-max' : ''} ${view ? 'showTop' : 'invisible'}`}>
                <i className="me-2 far fa-dot-circle fs-3"/>{text}
            </h4>
        </ViewContent>
    )
}

export default H4Avantage