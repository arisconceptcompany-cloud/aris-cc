import React from 'react';

const AnimatedText = () => {
    const text = "ARIS CONCEPT";
    return (
        <span className="p-sm-2 display-2 fw-bold">
            {text.split("").map((letter, index) => {
                if (letter === " ") {
                    return (
                        <span
                            key={index}
                            className="slideIn3D"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                color: "#0e8de8",
                                display: "inline-block",
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                                visibility: "visible"
                            }}
                        >
                            &nbsp;
                        </span>
                    );
                }

                return (
                    <span
                        key={index}
                        className="slideIn3D"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            color: index >= 5 ? "#0e8de8" : "#D10D58",
                            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        {letter}
                    </span>
                );
            })}
        </span>
    );
};

export default AnimatedText;
