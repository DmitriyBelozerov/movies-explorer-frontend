import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';


function Main() {
  return (
    <div className="App">
      <Header></Header>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <Footer></Footer>

    </div>
  );
}

export default Main;
