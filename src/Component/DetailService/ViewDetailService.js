import React, {useState} from "react";
import ViewContent from "../../FunctionComponent/ViewContent";
import LiView from "./LiView";

const ViewDetailService = ({data, navigate, lang, wMax,metier, index}) => {
    const [viewContent, setViewContent] = useState(false);
    return(
        <ViewContent setIsVisible={setViewContent} time={250}>
            <span className={`fw-bold d-inline-block ${viewContent ? (index+1)%2===0 ? 'arrow-div display-6': 'arrow-div-left display-6' : 'invisible'}`}>{data.trans}</span>
            <ul className={`list mt-3 ${wMax ? 'ms-1' : 'ms-3'} text-slate-500 grid grid-cols-2 grid-rows-3 gap-y-3`}>
                {metier.find((e)=>e.id===data.id).children.map((child,ind)=>(
                    <LiView key={`${child.id}-${data.id}`} index={ind} isVisible={viewContent} title={child.title[lang]} onClick={()=>navigate(`/${lang}/service/${data.id}/${child.id}`)}/>
                ))}
            </ul>
        </ViewContent>
    )
}
export default ViewDetailService