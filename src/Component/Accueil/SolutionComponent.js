import React, { useState} from "react";
import ViewContent from "../../FunctionComponent/ViewContent";

const SolutionComponent = ({color,icon,title,children, emplacement}) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <ViewContent setIsVisible={setIsVisible} time={250}>
            <article  className={`ac-sol-card ac-sol-card--${color} ${isVisible ? (emplacement+1)%2!==0 ? 'arrow-div' : 'arrow-div-left' : 'invisible'}`}>
                <span className="ac-sol-icon">{icon && React.createElement(icon, {size: 24})}</span>
                <h3 className="ac-sol-title">{title}</h3>
                <div className="ac-sol-body">
                    {children}
                </div>
            </article>
        </ViewContent>
    )
}
export default SolutionComponent
