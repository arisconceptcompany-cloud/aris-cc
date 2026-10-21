import React, {useState} from "react";
import integite from '../../Asset/intergrite.jpg'
import excellent from '../../Asset/exelent.jpg'
import eng from '../../Asset/engagementClient.jpg'
import giv from '../../Asset/giveJob.jpg'
import {useTranslation} from "react-i18next";
import ViewContent from "../../FunctionComponent/ViewContent";
import './AproposModern.css';

const VALUE_ITEMS = [
    {img: integite, title: 'inT', text: 'inTP'},
    {img: excellent, title: 'excellence', text: 'exP'},
    {img: eng, title: 'engT', text: 'eng'},
    {img: giv, title: 'respP', text: 'respT'},
];

const ValueRow = ({index, image, title, text, reverse}) => {
    const [view, setView] = useState(false);
    return (
        <ViewContent
            className={`apv-row ${reverse ? 'apv-row-reverse' : ''} ${view ? '' : 'invisible'}`}
            time={90}
            setIsVisible={setView}
        >
            <div className="apv-media">
                <img src={image} decoding={"async"} alt={title}/>
            </div>
            <div className="apv-content">
                <span className="apv-num">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="apv-title">{title}</h3>
                <p className="apv-text">{text}</p>
            </div>
        </ViewContent>
    );
};

const NosValeur = () => {
    const {t} = useTranslation()
    return (
        <section className="ap-section">
            <div className="ap-container">
                <h2 className="ap-heading">{t('valeur')}</h2>
                <div className="ap-underline"/>
                <p className="ap-intro">{t('p1Valeur')}</p>

                <div className="apv-list">
                    {VALUE_ITEMS.map((item, index) => (
                        <ValueRow
                            key={item.title}
                            index={index}
                            reverse={index % 2 === 1}
                            image={item.img}
                            title={item.title === 'excellence' ? 'Excellence' : t(item.title)}
                            text={t(item.text)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default NosValeur
