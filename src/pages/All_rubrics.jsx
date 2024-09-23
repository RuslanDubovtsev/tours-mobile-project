import {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom"
import Header from "../components/Header";

function AllRubrics() {
    const [rubrics, setRubrics] = useState([]);

    useEffect(() => {
        async function getRubrics() {
            try {
                const response = await axios.get("https://60812c4fc0d2ada6.mokky.dev/tour_rubrics");
                console.log(response);
                setRubrics(response.data);
            } catch(er) {
                console.log(er)
            }
        }
        getRubrics();
    }, [])

    return (
        <>
            <header class="header">
                <Header title="Все страны"/>
            </header>

            <div class="container">               
                {rubrics.map((rubric) => (
                    <Link class="wrapper" to={`/rubric_tour/${rubric.id}`}>
                        <div class="block_country">
                            <div class="country_flag">
                                <img src={rubric.flag} alt={rubric.title}/>
                            </div>
                            <div class="block_country__title">
                                {rubric.title}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </>

    )
}



export default AllRubrics;