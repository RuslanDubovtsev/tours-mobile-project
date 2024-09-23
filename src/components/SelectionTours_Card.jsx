import { Link } from "react-router-dom";


function SelectionToursCard({tour}) {
    return (
        <>
            <Link class="wrapper" to={`/tours/${tour.id}`}>
                <div class="selection_tour__container">
                    <div class="selection_tour__wrapper">
                        <img src={tour.img} alt={tour.title} class="selection_tour__img"/>
                    </div>
                    <div class="selection_tour__block">
                        <div class="selection_tour__text">
                            <div class="h2">{tour.title}</div>
                            <div class="grey_text">{tour.country}</div>
                            <div class="stars">{tour.stars}</div>
                            <div class="nights">{tour.nights}</div>
                        </div>
                        <div class="price">
                            {tour.price}
                        </div>
                    </div>   
                </div>
            </Link>
        </>

    )
}

export default SelectionToursCard;