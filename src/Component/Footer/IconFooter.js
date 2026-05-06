import React, {useCallback} from "react";
import  '../../Page/IconCss.css'

const IconFooter = ({isVisible=true}) => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])
    return(
        <>
            <div className={`${isVisible ? 'position-fixed pst-icon  p-2 z-3 rounded-bottom-end d-flex': 'd-none'}`}>
                <ul className="list-group position-relative">
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center `}>
                        <a aria-label="lien linkedin" href="https://www.linkedin.com/in/aris-concept-company-567703240" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in fn-6 text-linkdein"/>
                        </a>
                    </li>
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center`}>
                        <a aria-label="lien e-mail" href={`mailto:${'contact@aris-cc.com'}`} onClick={handleClick}>
                            <i className="fa-solid fa-at fn-6 text-white"/>
                        </a>
                    </li>
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center`}>
                        <a aria-label="lien whatsapp" href="https://wa.me/+261381237996" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp fn-6 text-whatsapp"/>
                        </a>
                    </li>
                    <li className={`list-group-item comp mb-1 cursor-pointer rounded-circle w-h-30 bg-li border-0 d-flex justify-content-center align-items-center`}>
                        <a aria-label="lien phone contact" href="tel:+261381237996" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-phone fn-6 text-tel"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default IconFooter