import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const LearnMore = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  return (
    <div>
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
                return navigate(`/learn-more/${value.uid}`);
              }}
            >
              Saber mas!
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          return navigate("/")
        }}
      >
        ir a home
      </button>
    </div>
  );
};
