import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const LearnMorePeople = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { idPeople } = useParams();
  const { description = "", properties = "" } = store.learnMorePeople;

  useEffect(() => {
    llamadoPeople();
  }, []);

  async function llamadoPeople() {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/people/${idPeople}`
      );
      if (response.ok == false) {
        throw new Error("response dio false");
      }
      const data = await response.json();
      dispatch({
        type: "learnMorePeople",
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
              src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${idPeople}.jpg`}
              className="img-fluid rounded card m-2 "
            />
          </div>
          <div className="col-md-5  d-flex flex-column align-items-center m-3 p-0 colorRojo">
            <h1>{properties.name}</h1>
            <p className="fs-3 colorRojo">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias soluta sapiente debitis minus? Non ad ex adipisci. Rerum
              sequi optio quam maxime numquam asperiores ab dolorem. Eum
              provident error sint.
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
          <div className="col">{properties.birth_year}</div>
          <div className="col">{properties.gender}</div>
          <div className="col">{properties.height}</div>
          <div className="col">{properties.skin_color}</div>
          <div className="col">{properties.eye_color}</div>
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
