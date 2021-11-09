import React from 'react'
import "./footer.scss"
import BusinessIcon from '@material-ui/icons/Business';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next'

function Footer() {
    
    const { t } = useTranslation()

    return (
        <footer className="footer-wrapper">
            <div className="footer-contacts">
                <ul>
                    <li><BusinessIcon fontSize="small" mr={5} /><p>Résidence les Lauzières, 155 Rue du soleil, 73440 VAL THORENS</p></li>
                    <li><LocalPhoneIcon fontSize="small" /><p>+33 0673346890</p></li>
                    <li><EmailIcon fontSize="small" /><p>pascal.paire@orange.fr</p></li>
                    <li><ContactSupportIcon fontSize="small" /><Link to="/contacts"><p>{t("headers.page_title_contacts")}</p></Link></li>
                </ul>
            </div>
            <hr className="hr-footer" />
            <div className="footer-container">
                <p className="madeBy">&copy; 2021 Duplex Val Thorens | by Raffaele Di Martino</p>
            </div>
        </footer>
    )
}

export default Footer
