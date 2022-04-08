import React, { useState, useEffect} from "react";

const Images = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);
  
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch("http://localhost:3000/list")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setImages(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    // const image = [
    //     {
    //         src: 'images/ocean.jpg',
    //         alt: 'ocean',
    //         id: 'ocean',
    //     },
    //     {
    //         src: 'images/mountain.jpg',
    //         alt: 'mountain',
    //         id: 'mountain',
    //     },
    //     {
    //         src: 'images/desert.jpg',
    //         alt: 'desert',
    //         id: 'desert',
    //     },
    // ]
    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
    return (
        <div className="cards">
            {images.map((image) => 
                <div className="card__block" key={image.id}>
                    <img src={image.src} alt={image.alt} id={image.id} className="card__image" ></img>
                </div>
            )}
        </div>
    )
    }
}

export default Images