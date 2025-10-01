import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [colorAleatorio, setColorAleatorio] = useState("red");
  const navigate = useNavigate();
  useEffect(() => {
    llamadoApiPersonajes();
    llamadoApiPlanetas();
    llamadoApiNaves();
  }, []);

  async function llamadoApiPersonajes() {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (response.ok == false) {
        throw new Error("todo salio mal");
      }
      const data = await response.json();
      dispatch({
        type: "llamadoApiPeople",
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function llamadoApiPlanetas() {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      if (response.ok == false) {
        throw new Error("todo salio mal");
      }
      const data = await response.json();
      dispatch({
        type: "llamadoApiPlanets",
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function llamadoApiNaves() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships");
      if (response.ok == false) {
        throw new Error("todo salio mal");
      }
      const data = await response.json();
      dispatch({
        type: "llamadoApiStarships",
        payload: data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }
  const placeholder = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg`;

  const colorAleatorioFuncion = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return setColorAleatorio(`rgb(${r},${g},${b})`);
  };

  return (
    <div className="row d-flex justify-content-center align-items-center ancho">
      <div className="col-12 gx-5 d-flex justify-content-center align-items-center flex-column text-center mt-5 w-auto h-auto">
        <div className="container-fluid row flex-nowrap row-cols-3 overflow-x-auto d-flex justify-content-between">
          {store.people.map((value, index) => {
            return (
              <div key={value.uid} className="col card m-3 p-0">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${value.uid}.jpg`}
                  alt={value.name}
                  className="img-fluid rounded altura"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = placeholder;
                  }}
                />
                <p className="h3 m-1">{value.name}</p>

                <button
                  className="btn btn-info m-2"
                  onClick={() => {
                    colorAleatorioFuncion();
                    return dispatch({ type: "favs", payload: value.name });
                  }}
                >
                  <i
                    style={{ color: colorAleatorio }}
                    className="fa-solid fa-heart"
                  ></i>
                </button>

                <button
                  className="btn btn-dark m-2"
                  onClick={() => {
                    return navigate(`/learn-morePeople/${value.uid}`);
                  }}
                >
                  Saber mas!
                </button>
              </div>
            );
          })}
        </div>

        <div className="container row flex-nowrap row-cols-3 overflow-x-auto d-flex justify-content-between">
          {store.planets.map((value, index) => {
            return (
              <div key={value.uid} className="col card m-3 p-0">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${value.uid}.jpg`}
                  alt={value.name}
                  className="img-fluid rounded altura"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = placeholder;
                  }}
                />
                <p className="h3 m-1">{value.name}</p>

                <button
                  className="btn btn-info m-2"
                  onClick={() => {
                    colorAleatorioFuncion();
                    return dispatch({ type: "favs", payload: value.name });
                  }}
                >
                  <i
                    style={{ color: colorAleatorio }}
                    className="fa-solid fa-heart"
                  ></i>
                </button>

                <button
                  className="btn btn-dark m-2"
                  onClick={() => {
                    return navigate(`/learn-morePlanets/${value.uid}`);
                  }}
                >
                  Saber mas!
                </button>
              </div>
            );
          })}
        </div>
        <div className="container row flex-nowrap row-cols-3 overflow-x-auto ">
          {store.starships.map((value, index) => {
            return (
              <div
                key={value.uid}
                className="col card m-3 p-0 d-flex justify-content-between"
              >
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${value.uid}.jpg`}
                  alt={value.name}
                  height="5vh"
                  className="img-fluid rounded altura"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = placeholder;
                  }}
                />
                <p className="h3 m-1">{value.name}</p>

                <button
                  className="btn btn-info m-2"
                  onClick={() => {
                    colorAleatorioFuncion();
                    return dispatch({ type: "favs", payload: value.name });
                  }}
                >
                  <i
                    style={{ color: colorAleatorio }}
                    className="fa-solid fa-heart"
                  ></i>
                </button>
                <button
                  className="btn btn-dark m-2"
                  onClick={() => {
                    return navigate(`/learn-moreStarships/${value.uid}`);
                  }}
                >
                  Saber mas!
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
