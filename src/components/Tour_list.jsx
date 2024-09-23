import TourRubrics from "./TourRubrics";
import axios from 'axios';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function TourList() {

    const [tours, setTours] = useState([]); /* Hook  */

    useEffect(() => {
        async function fetchTours() {
            try {
                const response = await axios.get('https://60812c4fc0d2ada6.mokky.dev/tour_rubrics')
                // console.log("Fetched tours:", response.data);
                setTours(response.data); // json
            } 
            catch(error) {
                console.log(error);
            } 
        }
        fetchTours();
    }, [])

    return (
        <div class="tours_rubrics__row">
            {tours.slice(0, 6).map((tour) => (
                <Link class="wrapper" to={`/rubric_tour/${tour.id}`}>
                    <TourRubrics key={tour.id} tour={tour} />
                </Link>
            ))}
        </div>

    )
}

export default TourList;