import React, {useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";
import {JobData as metier} from "../../Config/Job";
import ViewContent from "../../FunctionComponent/ViewContent";
import ShowModalDevis from "./ShowModalDevis";
import cp from '../../Asset/comptable.png';
import traitement from '../../Asset/traitement.png';
import rh from '../../Asset/ressources humaines.png';
import extAdd from '../../Asset/Externalisation administrative.png';
import web from '../../Asset/Web et Marketing.png';
import './ServiceGrid.css';

const ServiceCard = ({data, index, onQuote}) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const service = useMemo(() => metier.find((e) => e.id === data.id), [data.id]);
    const children = service ? service.children : [];
    const shown = expanded ? children : children.slice(0, 4);

    return (
        <ViewContent
            className={`sg-card-wrap ${visible ? 'sg-in' : 'invisible'}`}
            setIsVisible={setVisible}
            time={180 + index * 90}
        >
            <article id={data.div} className="sg-card">
                <div className="sg-media">
                    <img src={data.image} alt={data.title} loading="lazy"/>
                </div>
                <div className="sg-body">
                    <h3 className="sg-title">{data.title}</h3>
                    <p className="sg-text">{data.text}</p>

                    <span className="sg-sublabel">{data.trans}</span>
                    <ul className="sg-chips">
                        {shown.map((child) => (
                            <li key={`${data.id}-${child.id}`}>
                                <button
                                    type="button"
                                    className="sg-chip"
                                    onClick={() => navigate(`/${lang}/service/${data.id}/${child.id}`)}
                                >
                                    {child.title[lang]}
                                </button>
                            </li>
                        ))}
                        {!expanded && children.length > 4 && (
                            <li>
                                <button
                                    type="button"
                                    className="sg-chip sg-chip-more"
                                    onClick={() => setExpanded(true)}
                                >
                                    +{children.length - 4}
                                </button>
                            </li>
                        )}
                    </ul>

                    <div className="sg-actions">
                        <button type="button" className="btn btn-primary btn-sm sg-quote" onClick={onQuote}>
                            {t('demandeDevis')}
                            <FaArrowRight className="sg-arrow" size={13}/>
                        </button>
                    </div>
                </div>
            </article>
        </ViewContent>
    );
};

const ServiceGrid = () => {
    const { t, i18n } = useTranslation();
    const [clickModal, setClickModal] = useState(false);
    const [title, setTitle] = useState('');

    const services = useMemo(() => ([
        {id: 1, div: 'accounting', image: cp, trans: t('aideSur'), title: t('compta'), text: t('introCompta')},
        {id: 4, div: 'info', image: traitement, trans: t('cela'), title: t('info'), text: t('introTraitement')},
        {id: 5, div: 'hr', image: rh, trans: t('apport'), title: t('rh'), text: t('introRh')},
        {id: 2, div: 'ext', image: extAdd, trans: t('aideGerer'), title: t('ext'), text: t('introExt')},
        {id: 3, div: 'web-marketing', image: web, trans: t('aideSurF'), title: t('marketing'), text: t('introMark')},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ]), [i18n.language, t]);

    const openQuote = (tl) => {
        setTitle(tl);
        setClickModal(true);
    };

    return (
        <section className="sg-section">
            <div className="sg-container">
                <header className="sg-head">
                    <span className="sg-eyebrow">{t('serUs')}</span>
                    <p className="sg-lead">{t('descService')}</p>
                </header>

                <div className="sg-grid">
                    {services.map((data, index) => (
                        <ServiceCard
                            key={data.div}
                            data={data}
                            index={index}
                            onQuote={() => openQuote(data.title)}
                        />
                    ))}
                </div>
            </div>

            {clickModal && (
                <ShowModalDevis t={t} title={title} show={clickModal} onHide={() => setClickModal(false)}/>
            )}
        </section>
    );
};

export default ServiceGrid;
