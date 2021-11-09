import React from 'react'
import "./contact-form.scss"
import SendIcon from '@material-ui/icons/Send';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import { useTranslation} from 'react-i18next'

function ContactForm() {

    const { t } = useTranslation()

    return (
            <div className="form-container">
                <div className="contacts-form-wrapper">
                    <div className="contacts-form"><LocalPhoneIcon fontSize="medium" /><p>+33 0673346890</p></div>
                    <div className="contacts-form"><EmailIcon fontSize="medium" /><p>pascal.paire@orange.fr</p></div>
                </div>
                <form action="https://formsubmit.co/xoomegaredox@gmail.com" method="POST">
                    <input type="text" name="_honey" style={{display: "none"}}/>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="http://localhost:3000/#/success" />
                    <input type="hidden" name="_autoresponse" value="Thank you we have received you message" />
                    <div className="form-group">
                        <input type="text" name="Name" placeholder={t("contacts.full_name")} required/>
                        <input type="email" name="Email" placeholder={t("contacts.email")} required/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder={t("contacts.message")} className="form-control" name="Message" rows="20" required></textarea>
                    </div>
                    <button className="send-form" type="submit" ><SendIcon />&#8194;{t("contacts.send")}</button>
                </form>
            </div>
    )
}

export default ContactForm