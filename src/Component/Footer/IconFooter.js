import React, {useCallback} from "react";
import {FaAt, FaPhone, FaLinkedinIn, FaWhatsapp} from "react-icons/fa6";
import  '../../Page/IconCss.css'
import './FooterModern.css'

const IconFooter = ({isVisible=true}) => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${'contact@aris-cc.com'}`;
        window.open(mailtoUrl, '_blank');
    },[])

    const items = [
        {label: 'lien linkeddin', href: 'https://www.linkedin.com/in/aris-concept-company-567703240', icon: FaLinkedinIn, color: 'social-linkedin', onClick: null},
        {label: 'lien e-mail', href: `mailto:contact@aris-cc.com`, icon: FaAt, color: 'social-phone', onClick: handleClick},
        {label: 'lien whatsapp', href: 'https://wa.me/+261381237996', icon: FaWhatsapp, color: 'social-whatsapp', onClick: null},
        {label: 'lien phone contact', href: 'tel:+261381237996', icon: FaPhone, color: 'social-facebook', onClick: null},
    ]

    return(
        <div className={`floating-socials ${isVisible ? '' : 'd-none'}`}>
            {items.map(({label, href, icon: Icon, color, onClick}) => (
                <a key={label} aria-label={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={onClick} className={`floating-social ${color}`}>
                    <Icon size={16}/>
                </a>
            ))}
        </div>
    )
}

export default IconFooter
