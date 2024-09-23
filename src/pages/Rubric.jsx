import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import SelectionTours from "../components/SelectionTours";
import axios from "axios";
import SelectionToursCard from "../components/SelectionTours_Card";
import Header from "../components/Header";


function RubricTour() {

    const {id} = useParams()
    const [tours, setTours] = useState([]);
    const [toursrubric, setToursrubric] = useState({});

    useEffect(() => {
        async function getRubricPost() {
            try {
                const response = await axios.get(`https://60812c4fc0d2ada6.mokky.dev/tour_rubrics/${id}`)
                setToursrubric(response.data)
                // console.log("ID", tours.id)
                // console.log(response)
            } catch(er) {
                console.log(er)
            }
        }

        async function getSelection() {
            try {
                const response = await axios.get("https://b8e7fa6307fbbba9.mokky.dev/tours")
                setTours(response.data)
                // console.log("ID", tours.id)
                // console.log(response)
            } catch(er) {
                console.log(er)
            }
        }
        getSelection();
        getRubricPost();
    }, [id])

    return (
        <>
            <header className="header">
                <Header title={toursrubric.title} />
            </header>
            <div class="second_container">
                {tours.map((tour) => {
                    return tour.country === toursrubric.title ? (
                        <SelectionToursCard key={tour.id} tour={tour} />
                    ) : null
                })}
                
            </div>
        </>

    )
    

}

export default RubricTour;