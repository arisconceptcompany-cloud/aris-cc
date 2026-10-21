import React from "react";
import unique from '../../Asset/SolutionUnique.jpg'
import acc from '../../Asset/Accompagnement.jpg'
import prix from '../../Asset/BestPrice.jpg'
import flex from '../../Asset/Flexibilite.jpg'
import qual from '../../Asset/Qualifie.jpg'
import comp from '../../Asset/Competant.jpg'
import innovant from '../../Asset/Innovant.jpg'
import formation from '../../Asset/Formation.jpg'
import stable from '../../Asset/Stabilite.jpg'
import condition from '../../Asset/condition.jpg'
import equipement from '../../Asset/equipement.jpg'
import DetailAvantage from "./DetailAvantage";
import {useTranslation} from "react-i18next";
import H4Avantage from "./H4Avantage";
import './Avantage.css';

const GROUPS = [
    {
        title: 'Service',
        items: [
            {image: unique, title: 'solUn', text: 'solContent'},
            {image: acc, title: 'engTitle', text: 'engContent'},
            {image: prix, title: 'prix', text: 'prixContent'},
            {image: flex, title: 'flex', text: 'flexContent'},
        ],
    },
    {
        title: 'staff',
        items: [
            {image: innovant, title: 'innovT', text: 'innovC'},
            {image: comp, title: 'compT', text: 'compC'},
            {image: qual, title: 'qual', text: 'qualC'},
        ],
    },
    {
        title: 'company',
        items: [
            {image: formation, title: 'formT', text: 'formC'},
            {image: condition, title: 'condT', text: 'condC'},
            {image: equipement, title: 'equiT', text: 'equiC'},
            {image: stable, title: 'stabT', text: 'stabC'},
        ],
    },
];

const Equipement = () => {
    const {t}=useTranslation()
    return(
        <section className="av-section">
            <div className="av-container">
                <p className="av-lead">
                    {t('withUs')}
                </p>

                {GROUPS.map((group, gi) => (
                    <div className="av-group" key={group.title}>
                        <H4Avantage text={t(group.title)}/>
                        <div className="av-rows">
                            {group.items.map((item, i) => (
                                <DetailAvantage
                                    key={item.title}
                                    index={i}
                                    reverse={i % 2 === 1}
                                    image={item.image}
                                    title={t(item.title)}
                                    text={t(item.text)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Equipement
