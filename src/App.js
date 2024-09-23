import Header from './components/Header';
import MainPage from './pages/Main_page';
import './assets/css/style.css';
import {Routes,  Route} from "react-router-dom"
import DetailRubric from './pages/Detail_rubric';
import AllRubrics from './pages/All_rubrics';
import RubricTour from './pages/Rubric';

function App() {
  return (
    <>

      <main>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/tours/:id" element={<DetailRubric/>}/>
          <Route path='/allrubrics/' element={<AllRubrics />} />
          <Route path="/rubric_tour/:id" element={<RubricTour />}/>
        </Routes>
      </main>
    </>

    
  )
};

export default App;
