import React from 'react'
import "./success-message.scss"
import { useTranslation} from 'react-i18next'

function SuccessMessage() {

    const { t } = useTranslation()

    return (
        <div className="success-wrapper">  
            <h2 className="thanks-h2">{t("success.thank_you")}</h2>
            <h3 className="thanks-h3">{t("success.thank_you2")}</h3>
            <hr className="hr-success" />        
        </div>
    )
}

export default SuccessMessage
