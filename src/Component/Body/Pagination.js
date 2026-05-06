import React from "react";

const Pagination = ({length, active, setActive}) => {

    return (
        <>
            <div className="w-100 mt-2 p-0 mb-0 text-center">
                <ul className="list-group-horizontal mb-0 list-inline">
                    {Array.from({length: length}, (_, index)=>index).map((i)=>(
                        <li key={i} onClick={()=>setActive(i+1)} className={`list-inline-item rounded-circle border border-dark cursor-pointer ${(i+1)===active ? 'bg-dark' : ''}`} style={{width: '10px', height: '10px'}}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Pagination