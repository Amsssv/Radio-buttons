import React, { useState, useEffect } from "react";

function App() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        fetch("http://localhost:3000/list")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setImages(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const image = images[currentIndex];

    if (images.length === 0) {
        return;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="body" >
                {images.map((button, i) =>
                    <div className="radio" onClick={() => setCurrentIndex(i)}>
                        <input type="radio" className="radio__input" name="selector" checked={i === currentIndex} />
                        <label className="radio__label" >{button.name}</label>
                    </div>
                )}
            </div>
            {image &&
                <div className="cards">
                    <div className="card__block" key={image.id}>
                        <img src={image.src} alt={image.alt} id={image.id} className="card__image" />
                    </div>
                </div>}
        </div>
    );

}

export default App;