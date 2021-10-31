import React from 'react'
import "../styles/rates.scss"
import PageTitle from '../components/pages-title/PageTitle'
import RatesTable from '../components/rates-table/RatesTable'

function Rates() {
    return (

        <div>
            <div className="img-container-rates"></div>
            <PageTitle 
                h1 ="Rates 2021-2022"
                h2 ="Weekly rates with arrival on Saturday and 7 nights minimum stay"    
            />
            <RatesTable 
                month="Start of Season"
                period="20 November to 11 December 2021"
                rates="1500€"
                period2="11 December to 19 December 2021"
                rates2="1700€"
            />
            <RatesTable 
                month="Christmas & New Year"
                period="19 December to 26 December 2021"
                rates="3800€"
                period2="26 December to 02 January 2022"
                rates2="4200€"
            />
            <RatesTable 
                month="Low Season"
                period="02 January to 08 January 2022"
                rates="2250€"
                period2="08 January to 22 January 2022"
                rates2="2500€"
            />
            <RatesTable 
                month="Mid Season"
                period="22 January to 05 February 2022"
                rates="3000€"
            />
            <RatesTable 
                month="High Season"
                period="05 February to 05 March 2022"
                rates="4000€"
            />
            <RatesTable 
                month="Mid Season"
                period="05 March to 12 March 2022"
                rates="3000€"
                period2="12 March to 19 March 2022"
                rates2="2850€"
                period3="19 March to 09 April 2022"
                rates3="2650€"
            />
            <RatesTable 
                month="Easter Holidays"
                period="09 April to 07 May 2022"
                rates="2950€"
            />
        </div>
    )
}

export default Rates
