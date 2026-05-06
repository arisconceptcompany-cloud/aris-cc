import React from "react";

const Star = ({ size = '0.1', top = '10px', left = '0px' }) => {
    return (
        <>
            <div
                className="etoile"
                style={{
                    zIndex: '2',
                    top: top,
                    left: left,
                    transform: `scale(${size})`,
                }}
            >
                <div className="horizontal"/>
                <div className="vertical"/>
            </div>
        </>
    )
}
export default Star