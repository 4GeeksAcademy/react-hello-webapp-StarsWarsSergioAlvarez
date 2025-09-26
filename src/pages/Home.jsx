import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const [people, setPeople] = useState(null);
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { uidApi } = useParams();
  useEffect(() => {
    // llamadoApiPlanetas().then((response)=>{
    // 	 dispatch({
    // 		type: 'llamadoApiPlanetas',
    // 		payload: response.result
    // 	})
    // })

    llamadoApi();
  }, []);

  async function llamadoApi() {
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

  const llamadoApiPlanetas = () => {
    return fetch("https://www.swapi.tech/api/planets/1/", {})
      .then((response) => {
        return response.json() || [];
      })
      .then((data) => {
        console.log(data.result);
        return data.results || {};
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column  text-center mt-5">
      <h1>Hello Rigo!</h1>
      <button
        onClick={() => {
          return console.log(`${store.people}`);
        }}
      >
        mostrar cosas dentro de store
      </button>

        <div className="row">
          {store.people.map((value, index) => {
            return (
              <div key={value.uid} className="col-4 card m-2">
                <img
                  src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${value.uid}.jpg`}
                  alt="ImagenPersonaje"
                  className="img-fluid rounded"
                />
                <p className="h3">{value.name}</p>
                <p>{value.uid}</p>
                <p>{value.url}</p>
                <button>agregar a fav</button>
                <button
                  onClick={() => {
                    return navigate(`/learn-more/${value.uid}`)
                  }}
                >
                  Saber mas!
                </button>
              </div>
            );
          })}
        </div>

    </div>
  );
};
