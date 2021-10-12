import React from 'react'
import "../styles/home.scss"
import Description from '../components/description/Description'
import Background from "../assets/view-resized.jpg"
import HomeImage2 from "../assets/living-room-resized.jpg"
import HomeImage3 from "../assets/home-bedroom-resized.jpg"


function Home() {
    return (
        <div className="home">
            <div className="img-container"></div>
            <h1 className="welcome">We are delighted to offer you the opportunity to rent our 80 square metres apartment. Spread over two floors, situated on the top floor of the residence “Les Lauzieres”.</h1>
            <Description 
                className={"view-wrapper"}
                text="This apartment offers one of the most amazing views of the mountains, and its fantastic location allows you to ski right up to the apartment entrance."
                image={Background}
            />
            <Description 
            className={"view-wrapper reverse"}
                text="It accommodates up to 10 people in a quiet, guarded and safe residence. Right in the heart of Val Thorens, the building is only 50 metres away from the sports & shopping centre."
                image={HomeImage2}
            />
            <Description 
                className={"view-wrapper"}
                text="All beds will be freshly made ready to welcome you. Clean shower/bath towels for each of you are provided along with a kitchen towel set."
                image={HomeImage3}
            />
        </div>
    )
}

export default Home
