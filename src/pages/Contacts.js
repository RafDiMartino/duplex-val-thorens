import React from 'react'
import "../styles/contacts.scss"
import Header from '../components/header/Header'
import { useTranslation} from 'react-i18next'

function Contacts() {

    const { t } = useTranslation()

    return (
        <div>
            <div className="img-container-contacts"></div>
            <Header 
                h1={t("headers.page_title_contacts")}
                h2={t("headers.title_contacts")}
            />
        </div>
    )
}

export default Contacts