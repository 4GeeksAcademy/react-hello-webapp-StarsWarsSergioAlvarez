import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const LearnMoreStarships = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { idStarships } = useParams();
  const { description = "", properties = "" } = store.learnMoreStarships;

  useEffect(() => {
    llamadoStarships();
  }, []);

  async function llamadoStarships() {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/starships/${idStarships}`
      );
      if (response.ok == false) {
        throw new Error("response dio false");
      }
      const data = await response.json();
      dispatch({
        type: "learnMoreStarships",
        payload: data.result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="alto">
      <div className="container justify-content-center align-items-center flex-column text-center mt-5">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center align-items-center p-0">
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg`;
              }}
              src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${idStarships}.jpg`}
              className="img-fluid rounded card m-2 "
            />
          </div>
          <div className="col-md-5  d-flex flex-column align-items-center m-3 p-0 colorRojo">
            <h1>{properties.name}</h1>
            <p className="fs-3">
              Bacon ipsum dolor amet andouille picanha biltong, tongue brisket
              spare ribs landjaeger swine short ribs. Cow leberkas pancetta
              salami hamburger doner biltong chislic beef bresaola boudin
              sirloin beef ribs kielbasa.
            </p>
          </div>
        </div>

        <hr className="colorRojo" />
        <div className="row row-cols-12 mb-4 colorRojo m-1">
          <div className="col">name</div>
          <div className="col">MGLT</div>
          <div className="col">Cargo capacity</div>
          <div className="col">Crew</div>
          <div className="col">Length</div>
          <div className="col">Hyper Driver Rating</div>
        </div>
        <div className="row row-cols-12 mb-4 colorRojo m-1">
          <div className="col">{properties.name}</div>
          <div className="col">{properties.MGLT}</div>
          <div className="col">{properties.cargo_capacity}</div>
          <div className="col">{properties.crew}</div>
          <div className="col">{properties.length}</div>
          <div className="col">{properties.hyperdrive_rating}</div>
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
    </div>
  );
};
