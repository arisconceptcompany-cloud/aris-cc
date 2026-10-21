import React, {useState} from "react";
import SolutionComponent from "./SolutionComponent";
import ViewContent from "../../FunctionComponent/ViewContent";
import {useTranslation} from "react-i18next";
import {FaPeopleCarryBox, FaHandshake, FaCity, FaLightbulb, FaUserGroup} from "react-icons/fa6";

const SolutionServicePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {t} = useTranslation()
    return(
        <section className="ac-section ac-sol">
            <div className="ac-container">
                <ViewContent setIsVisible={setIsVisible} time={100}>
                    <div className="ac-head ac-head-center">
                        <h2 className={`ac-heading ${isVisible ? 'showTop' : 'invisible'}`}>{t('opt')}</h2>
                        <div className={`ac-underline ac-underline-center ${isVisible ? 'showTop' : 'invisible'}`}/>
                    </div>
                </ViewContent>
                <div className="ac-sol-grid">
                    <div id={"coworking"} className="ac-sol-wrap">
                        <SolutionComponent emplacement={0} title={"Coworking ?"} color={'purple'} icon={FaPeopleCarryBox} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('coworkingText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>

                    <div id={"sous-traitance"} className="ac-sol-wrap">
                        <SolutionComponent emplacement={1} title={t('sousTraitance')} color={'sand'} icon={FaHandshake} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('sousTraitanceText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                    <div id="centre-offshore" className="ac-sol-wrap">
                        <SolutionComponent emplacement={2} title={t('offshore')} color={'orange'} icon={FaCity}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('centreOffshoreText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                    <div id="pourquoi-externaliser" className="ac-sol-wrap">
                        <SolutionComponent emplacement={3} title={`${t('externaliser')} ?`} color={'red'} icon={FaLightbulb} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('extText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                    <div id="une-equipe-selon-vos-besoins" className="ac-sol-wrap">
                        <SolutionComponent emplacement={4} title={t('equipe')} color={'cyan'} icon={FaUserGroup} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('equipeText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SolutionServicePage
