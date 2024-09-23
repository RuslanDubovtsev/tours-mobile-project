
import TourRubrics from "../components/TourRubrics";
import fireImg from "../assets/img/fire.svg"
import TourList from "../components/Tour_list";
import SelectionTours from "../components/SelectionTours";
import Frame_Header from "../components/Frame_Header";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <>
            <header class="header">
                <Frame_Header/>
                <Header title="Добро пожаловать!" />
            </header>
            <section class="tours_rubrics">
                <div class="container">
                    <div class="title_component">
                        <span class="main_title">Горячие туры</span>
                        <span class="fire_frame"><img src={fireImg}/></span>
                    </div>
                    <TourList />
                </div>
            </section>
            <section class="selection_tours-section">
                <div class="tours_rubrics__button">
                    <div>
                        <Link to="/allrubrics/" className="wrapper">
                            <button class="button">
                                <div class="button_text">Другие страны</div>
                            </button>
                        </Link>

                    </div>
                </div>
                <div class="container">
                    <div class="selection_tours__title">
                        <div class="main_title">Подборка туров</div> 
                    </div>
                    <SelectionTours />
                </div>
            </section>
        </>
    )
}

export default MainPage;