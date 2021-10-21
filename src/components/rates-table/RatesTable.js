import React from 'react'
import "./rates-table.scss"


function RatesTable({ month, period, period2, period3, rates, rates2, rates3 }) {
    return (
        <div className="rates-wrapper">
            <h3>{month}</h3>
            <div className="titles">
                <h4>Period</h4>
                <h4>Weekly Rates</h4>                
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
