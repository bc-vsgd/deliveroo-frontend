import { useState, useEffect } from "react";
// Style
import "./assets/css/App.css";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin);
// Axios
import axios from "axios";
// Components
import Header from "./assets/components/Header";
import Title from "./assets/components/Title";
import Menus from "./assets/components/Menus";
import Basket from "./assets/components/Basket";
import Footer from "./assets/components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        // LOCAL
        const url = "http://localhost:3000/";
        const { data } = await axios.get(url);

        // REMOTE
        // const serverUrl =
        //   "https://site--deliveroo-backend--r6xgg7xm7vcz.code.run/";
        // const { data } = await axios.get(serverUrl);
        //
        setData(data);
        // console.log("App.jsx >>>>>>", data.data.items);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
      console.log("isLoading >>>>>", isLoading);
    };
    getRestaurantData();
  }, []);

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <div className="loading-info-div">
            <p>Chargement en cours ...</p>
          </div>
        ) : (
          <div>
            <Title data={data.data.meta} />
            <div className="lg-row">
              <Menus data={data.data.items} />
              <Basket />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
