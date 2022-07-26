import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import MenuItems from "./components/menuItems/MenuItems";
import Header from "./components/header/Header";

// https://deliveroo-backend-orion2022.herokuapp.com/

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Avec un tableau vide en deuxième argument
    // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
    const fetchData = async () => {
      try {
        const response = await axios.get("https://deliveroo-backend-orion2022.herokuapp.com/");
        setData(response.data);
        console.log(response.data);
        // J'exécute mon setIsLoading après avoir fait mon setData
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading === true ? (
        <h1>En cours chargement</h1>
      ) : (
        <>
          <Header title={data.restaurant.name} description={data.restaurant.description} picture={data.restaurant.picture} />
          <div className="Content--center">
            <div className="Menu">
              {data.categories.map((categorie, index) => {
                return (
                  categorie.meals.length ? <MenuItems key={index} categorie={categorie} /> : ''
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
