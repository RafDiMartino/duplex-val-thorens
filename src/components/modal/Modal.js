import React from 'react'
import "./modal.scss"

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("backdrop-wrapper")){
            setSelectedImg(null)
        } else if 
            (e.target.classList.contains("close")){
                setSelectedImg(null)
            }
    }

    return (
        <div className="backdrop-wrapper" onClick={handleClick}>
            <div className="backdrop-container">
                <div className="backdrop">
                    <div class="close">&times;</div>   
                    <img src={selectedImg} alt="Val Thorens Map" />
                </div>
            </div>
        </div>
    )
}

export default Modal