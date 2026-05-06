import React, {useState} from "react";
import SolutionComponent from "./SolutionComponent";
import {useMediaQuery} from "react-responsive";
import ViewContent from "../../FunctionComponent/ViewContent";
import {useTranslation} from "react-i18next";

const SolutionServicePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {t} = useTranslation()
    const minW=useMediaQuery({query: "(max-width: 517px)"})
    return(
        <>
            <div className="row w-100 m-0 p-4 pb-0">
                <ViewContent setIsVisible={setIsVisible} time={100}>
                    <h2 className={`text-warning-emphasis ${isVisible ? 'showTop' : 'opacity-0'}`}>{t('opt')}</h2>
                </ViewContent>
                <div className={`row mt-2 mb-0 ${minW ? 'p-0 mx-0' : ' mx-3 p-3'}`}>
                    <div id={"coworking"} className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">

                        <SolutionComponent emplacement={0} title={"Coworking ?"} color={'color-semi-purpule'} icon={'fa-people-carry'} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('coworkingText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>

                    <div id={"sous-traitance"} className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={1} title={t('sousTraitance')} color={'color-semi-orange'} icon={'fa-handshake'} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('sousTraitanceText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                    <div id="centre-offshore" className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={2} title={t('offshore')} color={'color-orange'} icon={'fa-city'}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('centreOffshoreText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                    <div id="pourquoi-externaliser" className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-2">
                        <SolutionComponent emplacement={3} title={`${t('externaliser')} ?`} color={'color-red'} icon={'fa-lightbulb'} >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t('extText')
                                }}
                                className="p-text"
                            />
                        </SolutionComponent>
                    </div>
                    <div id="une-equipe-selon-vos-besoins" className="col-lg-6 p-0 offset-lg-0 col-md-10 offset-md-1 col-sm-12 d-flex align-items-stretch mb-1">
                        <SolutionComponent emplacement={4} title={t('equipe')} color={'color-cyan'} icon={'fa-user-friends'} >
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
        </>
    )
}
export default SolutionServicePage