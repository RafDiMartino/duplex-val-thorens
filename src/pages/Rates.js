import React from 'react'
import "../styles/rates.scss"
import Header from '../components/header/Header'
import RatesTable from '../components/rates-table/RatesTable'
import { useTranslation} from 'react-i18next'
    
function Rates() {

    const { t } = useTranslation()

    return (

        <div>
            <div className="img-container-rates"></div>
            <Header
                h1={t("headers.page_title_rates")}
                h2={t("headers.title_rates")}
            />
            <RatesTable 
                season={t("rates.seasons.season_start.season_title")}
                period={t("rates.seasons.season_start.months")}
                rates="1500€"
                period2={t("rates.seasons.season_start.months2")}
                rates2="1700€"
            />
            <RatesTable 
                season={t("rates.seasons.christmas.season_title")}
                period={t("rates.seasons.christmas.months")}
                rates="3800€"
                period2={t("rates.seasons.christmas.months2")}
                rates2="4200€"
            />
            <RatesTable 
                season={t("rates.seasons.season_low.season_title")}
                period={t("rates.seasons.season_low.months")}
                rates="2250€"
                period2={t("rates.seasons.season_low.months2")}
                rates2="2500€"
            />
            <RatesTable 
                season={t("rates.seasons.season_mid.season_title")}
                period={t("rates.seasons.season_mid.months")}
                rates="3000€"
            />
            <RatesTable 
                season={t("rates.seasons.season_high.season_title")}
                period={t("rates.seasons.season_high.months")}
                rates="4000€"
            />
            <RatesTable 
                season={t("rates.seasons.season_mid2.season_title")}
                period={t("rates.seasons.season_mid2.months")}
                rates="3000€"
                period2={t("rates.seasons.season_mid2.months2")}
                rates2="2850€"
                period3={t("rates.seasons.season_mid2.months3")}
                rates3="2650€"
            />
            <RatesTable 
                season={t("rates.seasons.season_end.season_title")}
                period={t("rates.seasons.season_end.months")}
                rates="2950€"
            />
            <div className="short-stay-wrapper">
                <h1 className="h1-short-stay">{t("rates.short_stay_title")}</h1>
                <hr className="hr-rates" />
                <p className="short-stay">{t("rates.short_stay")}</p>
            </div>
        </div>
    )
}

export default Rates
