import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import SelectionToursCard from './SelectionTours_Card';
function SelectionTours() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        async function getSelection() {
            try {
                const response = await axios.get("https://b8e7fa6307fbbba9.mokky.dev/tours")
                setTours(response.data)
                // console.log("ID", tours.id)
            } catch(er) {
                // console.log(er)
            }
        }
        getSelection();
    }, [])

    return (
        <div class="selection_tour"> 
                {tours.map((tour) => (
                    <SelectionToursCard key={tour.if} tour={tour} />
                ))}

            
        </div>
    )

}

export default SelectionTours;