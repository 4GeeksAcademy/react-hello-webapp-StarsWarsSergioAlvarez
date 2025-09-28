import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
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

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-12 d-flex justify-content-center align-items-center flex-column text-center mt-5 w-auto h-auto">
        <h1>Star Wars Cards!</h1>
        <button
          onClick={() => {
            return console.log(store);
          }}
        >
          mostrar cosas dentro de store
        </button>

        <div className="row flex-nowrap row-cols-md-3 divPersonajes overflow-x-auto">
          {store.people.map((value, index) => {
            return (
              <div key={value.uid} className="col card m-2">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${value.uid}.jpg`}
                  alt={value.name}
                  className="img-fluid rounded"
                />
                <p className="h3">{value.name}</p>
                

                <button>agregar a fav</button>

                <button
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

        <div className="row flex-nowrap row-cols-4 divPersonajes overflow-x-auto">
          {store.planets.map((value, index) => {
            return (
              <div key={value.uid} className="col card m-2">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${value.uid}.jpg`}
                  alt={value.name}
                  className="img-fluid rounded"
                />
                <p className="h3">{value.name}</p>
                <p>{value.uid}</p>
                <p>{value.url}</p>
                <button>agregar a fav</button>
                <button
                  onClick={() => {
                    // return navigate(`/learn-more/${value.uid}`)
                  }}
                >
                  Saber mas!
                </button>
                <button
                  onClick={() => {
                    return console.log(imagePlanets(value.uid));
                  }}
                >
                  Magia
                </button>
              </div>
            );
          })}
        </div>
        <div className="row flex-nowrap row-cols-4 divPersonajes overflow-x-auto">
          {store.starships.map((value, index) => {
            return (
              <div key={value.uid} className="col card m-2">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${value.uid}.jpg`}
                  alt={value.name}
                  className="img-fluid rounded"
                />
                <p className="h3">{value.name}</p>
                <p>{value.uid}</p>
                <p>{value.url}</p>
                <button>agregar a fav</button>
                <button
                  onClick={() => {
                    // return navigate(`/learn-more/${value.uid}`)
                  }}
                >
                  Saber mas!
                </button>
                <button
                  onClick={() => {
                    return console.log(imagePlanets(value.uid));
                  }}
                >
                  Magia
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
