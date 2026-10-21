import React from "react";
import {useTranslation} from "react-i18next";
import equipe from '../../Asset/Equipe.png'
import {FaBriefcase, FaClock, FaGraduationCap} from "react-icons/fa6";
import './AproposModern.css';

const PILLAR_ICONS = [FaBriefcase, FaClock, FaGraduationCap];

const QuiSommeNous = () => {
    const {t}=useTranslation()
    const pillars = [t('p1'), t('p2'), t('p3')];
    return (
        <section className="ap-section">
            <div className="ap-container">
                <h2 className="ap-heading">{t('dna')}</h2>
                <div className="ap-underline"/>

                <div className="ap-about">
                    <div className="ap-about-media">
                        <img src={equipe} draggable={"false"} decoding={"async"} alt="img-equipe"/>
                        <span className="ap-about-badge">Aris Concept</span>
                    </div>
                    <div className="ap-about-text">
                        <p>
                            <span className="ap-aris">ARIS</span> <span className="ap-concept">CONCEPT</span> {t('introAris')}
                        </p>
                    </div>
                </div>

                <div className="ap-points">
                    {pillars.map((text, i) => {
                        const Icon = PILLAR_ICONS[i];
                        return (
                            <div className="ap-point" key={i}>
                                <span className="ap-point-icon"><Icon size={16}/></span>
                                <p className="ap-point-text">{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default QuiSommeNous
