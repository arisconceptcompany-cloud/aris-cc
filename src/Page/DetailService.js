import React, {useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import {JobData as metier} from "../Config/Job";
import HeaderContent from "../Component/Head/HeaderContent";
import AccueilFooter from "../Component/Footer/AccueilFooter";
import InfoDetailService from "../Component/Head/InfoDetailService";
import CompDetail from "../Component/DetailService/CompDetail";
import {Helmet} from "react-helmet";

const DetailService = () => {
    const navigate=useNavigate()
    const {domaine, service, lang}=useParams()
    const [child,setChild]=useState(null)
    const [parentChild,setParent]=useState(null)

    useEffect(()=>{
        const search=metier.find((e)=>e.id===parseInt(domaine))
        if (search){
            setParent(search)
            const childrenFind=search.children.find((e)=>e.id===parseInt(service))
            if (childrenFind){
                setChild(childrenFind)
            }else{
                navigate('/notfound')
            }
        }else{
            navigate('/notfound')
        }
    },[domaine,service])
    return (
        <>
            {child && parentChild && (
                <>
                    <Helmet>
                        <html lang={lang} />
                        <title>{child.title[lang] + ' Externalisé'}</title>
                        <meta name="description" content={child.description[lang]}/>
                        <link rel="alternate" href={`https://www.aris-cc.com/en/service/${domaine}/${service}`} hrefLang="en"/>
                        <link rel="alternate" href={`https://www.aris-cc.com/fr/service/${domaine}/${service}`} hrefLang="fr"/>
                        <link rel="alternate" href={`https://www.aris-cc.com/fr/service/${domaine}/${service}`} hrefLang="x-default"/>
                        <meta property="og:url" content={`https://www.aris-cc.com/${lang}/service/${domaine}/${service}`} />
                        <meta property="og:title" content={child.title[lang] + ' | Aris Concept'} />
                        <meta property="og:description" content={child.description[lang]} />
                        <meta property="og:type" content="article"/>
                        <meta name="twitter:title" content={ child.title[lang] + ' | Aris Concept'} />
                        <meta name="twitter:description" content={child.description[lang]} />
                        <meta name="twitter:url" content={`https://www.aris-cc.com/${lang}/service/${domaine}/${service}`} />
                    </Helmet>
                    <HeaderContent active={2}/>
                    <InfoDetailService/>
                    <CompDetail parent={parentChild} element={child}/>
                    <AccueilFooter/>
                </>
            )}
        </>
    )
}

export default DetailService