import React, {useEffect, useState} from "react";
import './body.css'
import ViewContent from "../../FunctionComponent/ViewContent";

const DetailService = ({position, element, children,clicked, wMax, t}) => {
    const [containerHeight, setContainerHeight] = useState('600px');
    useEffect(() => {
        if (!wMax){
            const updateHeight = () => {
                setContainerHeight(window.innerHeight < 560 ? '600px' : `${window.innerHeight}px`);
            };

            updateHeight();
            window.addEventListener('resize', updateHeight);

            return () => window.removeEventListener('resize', updateHeight);
        }
    }, [wMax]);
    const [viewTitle, setViewTitle] = useState(false);
    const [viewPhoto, setViewPhoto] = useState(false);
    const [viewRequest, setViewRequest] = useState(false);
    const [viewParagraphe,setViewParagraphe]=useState(false)
    return(
        <>
            <div id={element.div} className={`${wMax ? 'mb-3 h-auto' : 'min-vh-100'} m-0 position-relative`}>
                {wMax ? (
                    <div className="w-100 p-2 m-0">
                        <div className="w-100 rounded-3 bg-linear-dark-aris py-2 shadow d-flex justify-content-center text-center">
                            <h1 className="display-4 text-white">{element.title}</h1>
                        </div>
                        <div className="mt-3 mx-0 px-1">
                            <p className="" style={{letterSpacing: '0.065rem'}}>{element.text}</p>
                            {children}
                            <div className="w-100 mt-0 d-flex justify-content-sm-start align-items-center">
                                <i className="mx-2 fa-2x fa fa-arrow-right"/>
                                <span onClick={()=>clicked()} className="fw-bold m-0 color-dark-concept cursor-pointer" style={{letterSpacing: '0.07rem', fontSize: '1.5rem',}}>
                                    {t('demandeDevis')}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mx-4 px-3 mt-0" style={{height: containerHeight }}>
                        <div className="row m-0 p-2 h-100 position-relative">
                            <ViewContent className={`position-absolute rounded-3 py-2 ps-center shadow text-center z-1 ${viewTitle ? ' showTopTitle': 'invisible'}`} setIsVisible={setViewTitle} time={220}>
                                <span className="display-3 text-white px-4">{element.title}</span>
                            </ViewContent>
                            {position % 2 !== 0 ? (
                                <>
                                    <div className="col-5 h-100">
                                        <ViewContent time={220} setIsVisible={setViewPhoto} className={`w-100 h-75 rounded-3 mt-4 z-0 ${viewPhoto ? 'arrow-div' : 'invisible'}`}  style={{ backgroundImage: `url('${element.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                                        <ViewContent time={220} setIsVisible={setViewRequest} className={`w-100 d-flex mt-3 justify-content-sm-start align-items-center ${viewRequest ? 'rotate' : 'invisible'}`}>
                                            <i className="mx-2 fa-2x fa fa-arrow-right"/>
                                            <span onClick={()=>clicked()} className="fw-bold p-2 m-0 scale color-dark-concept cursor-pointer" style={{letterSpacing: '0.07rem', fontSize: '1.65rem',}}>
                                                {t('demandeDevis')}
                                            </span>
                                        </ViewContent>
                                    </div>
                                    <div className="col-7 h-100 position-relative">
                                        <div className="position-absolute" style={{top: 'calc(2% + 7.25rem)'}}>
                                            <ViewContent time={250} setIsVisible={setViewParagraphe}>
                                                <p className={`p-spacing px-1 py-0 mt-0 mb-4 mx-0 ${viewParagraphe ? 'showTop' : 'invisible'}`}>{element.text}</p>
                                            </ViewContent>
                                            {children}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-6 h-100 position-relative">
                                        <div className="position-absolute" style={{top: 'calc(2% + 7.25rem)'}}>
                                            <ViewContent time={250} setIsVisible={setViewParagraphe}>
                                                <p className={`p-spacing px-1 py-0 mt-0 mb-4 mx-0 ${viewParagraphe ? 'showTop' : 'invisible'}`}>{element.text}</p>
                                            </ViewContent>
                                            {children}
                                        </div>
                                    </div>
                                    <div className="col-6 h-100">
                                        <ViewContent time={220} setIsVisible={setViewPhoto} className={`w-100 h-75 mt-4 rounded-3 z-0 ${viewPhoto ? 'arrow-div-left' : 'invisible'}`} style={{ backgroundImage: `url('${element.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                                        <ViewContent time={220} setIsVisible={setViewRequest} className={`w-100 mt-0 d-flex justify-content-sm-start align-items-center ${viewRequest ? 'rotate' : 'invisible'}`}>
                                            <i className="mx-2 fa-2x fa fa-arrow-right"/>
                                            <span onClick={()=>clicked()} className="fw-bold p-2 m-0 color-dark-concept cursor-pointer scale" style={{letterSpacing: '0.07rem', fontSize: '1.65rem',}}>
                                                {t('demandeDevis')}
                                            </span>
                                        </ViewContent>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default DetailService