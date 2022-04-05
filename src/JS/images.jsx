import React from "react";

const Images = () => {

    return(
        <div className="cards">
            <div className="card__block">
                <img src="images/ocean.jpg" alt="ocean" className="card__image"></img>
            </div>
            <div className="card__block">
                <img src="images/mountain.jpg" alt="mountain" className="card__image card__image--active"></img>
            </div>
            <div className="card__block">
                <img src="images/desert.jpg" alt="desert" className="card__image"></img>
            </div>
        </div>
    )
}

export default Images