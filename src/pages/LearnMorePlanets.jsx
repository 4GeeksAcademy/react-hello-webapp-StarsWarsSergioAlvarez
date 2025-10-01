import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const LearnMorePlanets = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { idPlanets } = useParams();
  const { description = "", properties = "" } = store.learnMorePlanets;

  useEffect(() => {
    llamadoPlanets();
  }, []);

  async function llamadoPlanets() {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/planets/${idPlanets}`
      );
      if (response.ok == false) {
        throw new Error("response dio false");
      }
      const data = await response.json();
      dispatch({
        type: "learnMorePlanets",
        payload: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container justify-content-center align-items-center flex-column text-center mt-5">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center align-items-center p-0">
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg`;
              }}
              src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${idPlanets}.jpg`}
              className="img-fluid rounded card m-2 "
            />
          </div>
          <div className="col-md-5  d-flex flex-column align-items-center m-3 p-0 colorRojo">
            <h1>{properties.name}</h1>
            <p className="fs-3 colorRojo">
              Bacon ipsum dolor amet andouille picanha biltong, tongue brisket
              spare ribs landjaeger swine short ribs. Cow leberkas pancetta
              salami hamburger doner biltong chislic beef bresaola boudin
              sirloin beef ribs kielbasa.
            </p>
          </div>
        </div>

        <hr className="colorRojo" />
        <div className="row row-cols-12 mb-4 colorRojo">
          <div className="col">name</div>
          <div className="col">Birth Year</div>
          <div className="col">Gender</div>
          <div className="col">Height</div>
          <div className="col">Skin Color</div>
          <div className="col">Eye Color</div>
        </div>
        <div className="row row-cols-12 mb-4 colorRojo">
          <div className="col">{properties.name}</div>
          <div className="col">{properties.climate}</div>
          <div className="col">{properties.population}</div>
          <div className="col">{properties.orbital_period}</div>
          <div className="col">{properties.rotation_period}</div>
          <div className="col">{properties.diameter}</div>
        </div>
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              return navigate("/");
            }}
          >
            Volver a home
          </button>
        </div>
      </div>
    </>
  );
};
