import React, {useEffect} from "react";

const StepLi = ({children, isVisible, index,setTurnOn}) => {
    useEffect(()=>{
        let timeout;
        if (isVisible){
            timeout = setTimeout(()=>setTurnOn(true),index*100)
        }else{
            setTurnOn(false)
        }
        return () => clearTimeout(timeout);
    },[isVisible])

    return children

}
export default StepLi