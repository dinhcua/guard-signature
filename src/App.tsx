import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import ContactProcess from "./Components/ContactProcess/ContactProcess";
import GetStarted from "./Components/GetStarted/GetStarted";
import Services from "./Components/Services/Services";
import EasyQuick from "./Components/EasyQuick/EasyQuick";
import Signature from "./Components/Signature/Signature";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <ContactProcess />
      <GetStarted />
      <Services />
      <EasyQuick />
      <Signature />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default App;
