import React from "react";
import Star from "./Star";
import '../APropos/AproposModern.css';

const InfoApropos = () => {
    return (
        <section className="ap-hero">
            <div className="ap-hero-inner">
                <h1 className="ap-hero-title">
                    <span className="ap-aris">ARIS</span> <span className="ap-concept">CONCEPT</span>
                </h1>
            </div>
            <Star size={'0.1'} left={'70%'} top={'50%'}/>
            <Star size={'0.12'} left={'4%'} top={'20%'}/>
            <Star size={'0.07'} left={'50%'} top={'90%'}/>
            <Star size={'0.13'} left={'12%'} top={'73%'}/>
        </section>
    )
}

export default InfoApropos
