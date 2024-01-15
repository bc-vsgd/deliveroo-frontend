import { useState, useEffect } from "react";
// Style
import "./assets/css/App.css";
// Axios
import axios from "axios";
// Components
import Header from "./assets/components/Header";
import Title from "./assets/components/Title";
import Menus from "./assets/components/Menus";
import Footer from "./assets/components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        // const url = "http://localhost:3000/";
        const serverUrl = "site--deliveroo-backend--r6xgg7xm7vcz.code.run";
        const { data } = await axios.get(serverUrl);
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
          <div className="loading-info-div">Chargement en cours</div>
        ) : (
          <div>
            <Title data={data.data.meta} />
            <Menus data={data.data.items} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
