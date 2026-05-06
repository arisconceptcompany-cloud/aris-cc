import React, {useState} from "react";
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
import ViewContent from "../../FunctionComponent/ViewContent";
import H4Avantage from "./H4Avantage";

const Equipement = () => {
    const {t}=useTranslation()
    const [viewContent, setViewContent] = useState(false);
    return(
        <>
            <ViewContent className="w-100 m-0 p-3" time={50} setIsVisible={setViewContent}>
                <span className={`display-4 d-inline-block text-concept fw-bold ${viewContent ? 'showTop' : 'invisible'}`}>{t('withUs')}</span>
                <H4Avantage text={'Service'}/>
                <div className="mt-3 w-100 mb-2 p-0">
                    <DetailAvantage emplacement={0} image={unique} title={t('solUn')} text={t('solContent')}/>
                    <DetailAvantage emplacement={1} image={acc} title={t('engTitle')} text={t('engContent')}/>
                    <DetailAvantage emplacement={2} image={prix} title={t('prix')} text={t('prixContent')}/>
                    <DetailAvantage emplacement={3} image={flex} title={t('flex')} text={t('flexContent')}/>
                </div>
                <H4Avantage text={t('staff')}/>
                <div className="mt-3 w-100 mb-2 p-0">
                    <DetailAvantage emplacement={0} image={innovant} title={t('innovT')} text={t('innovC')}/>
                    <DetailAvantage emplacement={1} image={comp} title={t('compT')} text={t('compC')}/>
                    <DetailAvantage emplacement={2} image={qual} title={t('qual')} text={t('qualC')}/>
                </div>
                <H4Avantage text={t('company')}/>
                <div className="mt-2 w-100 mb-2 p-0">
                    <DetailAvantage emplacement={0} image={formation} title={t('formT')} text={t('formC')}/>
                    <DetailAvantage emplacement={1} image={condition} title={t('condT')} text={t('condC')}/>
                    <DetailAvantage emplacement={2} image={equipement} title={t('equiT')} text={t('equiC')}/>
                    <DetailAvantage emplacement={3} image={stable} title={t('stabT')} text={t('stabC')}/>
                </div>
            </ViewContent>
        </>
    )
}

export default Equipement