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
  const [basket, setBasket] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

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
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
      // console.log("isLoading >>>>>", isLoading);
      setIsPaid(false);
    };
    getRestaurantData();
  }, [isPaid]);

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
              <Menus
                data={data.data.items}
                basket={basket}
                setBasket={setBasket}
              />

              <Basket
                basket={basket}
                setBasket={setBasket}
                setIsLoading={setIsLoading}
                setIsPaid={setIsPaid}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
