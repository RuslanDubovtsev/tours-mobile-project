import {useState, useEffect} from "react"
import SelectionTours from "../components/SelectionTours";
import axios from "axios";
import {useParams} from 'react-router-dom'
import Frame_Header from "../components/Frame_Header";
import Header from "../components/Header";
import Header_custom from "../components/Header_custom";


function DetailRubric() {

    const [tours, setTours] = useState({});
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        async function getDetailTour() {
            try {
                
                const response = await axios.get(`https://b8e7fa6307fbbba9.mokky.dev/tours/${id}`)
                console.log("fetch data", response)
                setTours(response.data)
            } catch(er) {
                console.log(er)
            }
        }
        getDetailTour();
    }, [id]);

    return (
        <>
            <header class="header">
                <Frame_Header/>
                <Header_custom key={tours.id} tour_name={tours} />
            </header>
            <section class="detail_rubric">
                <div class="detail_rubric__wrapper">
                    <img src={tours.img} rel={tours.title} class="detail_rubric__img"/>
                </div>
                <div class="detail_rubric__container">
                    <div class="detail_rubric__block-one">
                        <div class="detail_rubric__title">{tours.title}</div>
                        <div class="detail_rubric__country">{tours.country}</div>
                        
                    </div>
                    <div class="detail_rubric__block-two">
                        <div class="detail_rubric__nights">{tours.nights}</div>
                        <div class="detail_rubric__stars">{tours.stars}</div>
                    </div>
                </div>
                <div class="container">
                    <div class="detail_rubric__text">
                        {tours.description}
                    </div>
                    <div class="price">
                        {tours.price}
                    </div>
                </div>
            </section>
            <section class="random_tours_selection">
                <div class="selection_tours__title">
                    <div class="main_title">Подборка туров</div> 
                </div>
                <SelectionTours />
            </section>
        </>
    )
}

export default DetailRubric;