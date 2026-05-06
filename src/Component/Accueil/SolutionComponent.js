import React, { useState} from "react";
import ViewContent from "../../FunctionComponent/ViewContent";

const SolutionComponent = ({color,icon,title,children, emplacement}) => {
    const [isVisible, setIsVisible] = useState(false);
    return(
        <ViewContent setIsVisible={setIsVisible} time={250}>
            <div  className={`card h-100 border-0 mx-auto w-100 ${isVisible ? (emplacement+1)%2!==0 ? 'arrow-div' : 'arrow-div-left' : 'opacity-0'}`}>
                <div className="card-body m-0">
                    <h3 className={`text-start mb-3 ${color}`}><i className={`fas fa-2xl p-2 ${icon}`}/>{title}</h3>
                    <div className="row w-100">
                        {children}
                    </div>
                </div>
            </div>
        </ViewContent>
    )
}
export default SolutionComponent