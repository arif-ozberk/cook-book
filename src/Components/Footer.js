import React from 'react';

// Styles
import styles from "../styles/Footer.module.scss";


const Footer = () => {
    return (
        <div className={`${styles.Footer}`}>
            <div className={styles.socials}>
                <a href="https://www.instagram.com/arif.ozberk.24/" target='_blank'><i className='fa-brands fa-instagram'></i></a>
                <a href="https://github.com/arif-ozberk" target='_blank'><i className='fa-brands fa-github'></i></a>
                <a href="https://personal-portfolio-green-one.vercel.app" target='_blank'><i className='fas fa-user'></i></a>
            </div>
            <p>&copy; Arif Özberk Azmak | All Rights Reserved</p>
        </div>
    );
}
 
export default Footer;