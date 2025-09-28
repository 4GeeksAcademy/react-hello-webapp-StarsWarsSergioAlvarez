import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const LearnMorePeople = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { idPeople } = useParams();
  const {description = '', properties = ''} = store.learnMorePeople
  
  useEffect(() => {
    llamadoPeople();
  }, []);
  
  



  async function llamadoPeople() {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${idPeople}`);
      if (response.ok == false) {
        throw new Error("response dio false");
      }
      const data = await response.json();
      dispatch({
        type: 'learnMorePeople',
        payload: data.result
      })
      
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
      
    <div className="d-flex justify-content-center align-items-center flex-column text-center mt-5">
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center align-items-center p-0">
          <img
            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${idPeople}.jpg`}
            
            className="img-fluid rounded card m-2 "
          />
        </div>
        <div className="col-md-5  d-flex flex-column align-items-center m-3 p-0">
          <h1>{properties.name}</h1>
          <p className="fs-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta sapiente debitis minus? Non ad ex adipisci. Rerum sequi optio quam maxime numquam asperiores ab dolorem. Eum provident error sint.</p>
        </div>
      </div>

      <button
        onClick={() => {
          return console.log(properties);
        }}
      >
        magia
      </button>
      <button
        className="btn btn-success"
        onClick={() => {
          return navigate("/");
        }}
      >
        Volver a home
      </button>
    </div>
  );
};
