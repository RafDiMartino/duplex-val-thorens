import React from 'react'
import "./rates-table.scss"
import { useTranslation} from 'react-i18next'


function RatesTable({ season, period, period2, period3, rates, rates2, rates3 }) {

    const { t } = useTranslation()

    return (
        <div className="rates-wrapper">
            <h3>{season}</h3>
            <div className="titles">
                <h4>{t("rates.period")}</h4>
                <h4>{t("rates.weekly_rates")}</h4>                
            </div> 
            <div className="rates-container">
                <div className="rates">
                    <p>{period}</p>
                    <p>{rates}</p>
                </div>
                { period2 ? <div className="rates">
                    <p>{period2}</p>
                    <p>{rates2}</p>
                    </div> : <></> } 
                { period3 ? <div className="rates">
                    <p>{period3}</p>
                    <p>{rates3}</p>
                    </div> : <></> } 
            </div>   
        </div>
    )
}

export default RatesTable
