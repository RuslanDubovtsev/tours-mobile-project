

function TourRubrics({tour}) {
    // console.log("Tour data:", tour);
    return (
        
        <div class="tours_rubrics__block">
            <img class="tours_rubrics__img" src={tour.img} alt={tour.title}/>
            <div class="tours_rubrics__title">{tour.title}</div>
        </div>


    );
}


export default TourRubrics;