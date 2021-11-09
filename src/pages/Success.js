import React from 'react'
import "../styles/contacts.scss"
import Header from '../components/header/Header'
import { useTranslation} from 'react-i18next'
import SuccessMessage from '../components/success-message/SuccessMessage'

function Success() {
    
    const { t } = useTranslation()

    return (
        <div className="contacts">
            <div className="img-container-contacts"></div>
            <Header 
                h1={t("headers.page_title_contacts")}
                h2={t("headers.title_contacts")}
            />
            <SuccessMessage />
        </div>
    )
}

export default Success
