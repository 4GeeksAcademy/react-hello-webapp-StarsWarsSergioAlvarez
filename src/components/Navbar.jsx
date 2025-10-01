import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const eliminarFav = (index) => {
    return dispatch({ type: "eliminarFavs", payload: index });
  };
  return (
    <nav className="navbar navbar-expand-lg aplicarFondoTransparente w-100 ">
      <div className="container-fluid">

        <div className="ml-auto">
          <div className="dropdown ">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
                                  
              Favoritos<span className="badge text-bg-secondary m-2">{`${store.favs.length}`}</span>
                    
            </button>

            <ul className="dropdown-menu dropdown-menu-start text-center">
    		<li className='colorRojo'>Lista de favs</li>
              {store.favs.map((value, index) => {
                return (
                  <div key={index} className="d-flex align-items-center dropdown-item">
                    <li className="dropdown-item">{value}</li>
                    <button className='m-2 btn btn-danger' onClick={()=>{return eliminarFav(index)}}><i className="fa-solid fa-trash"></i></button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars Cards!</span>
        </Link>


      </div>
    </nav>

    // <nav class="navbar navbar-expand-lg aplicarFondoTransparente w-100">
    //   <div class="container-fluid">
    //      <Link to="/">
    //        <span className="navbar-brand mb-0 h1">Star Wars Cards!</span>
    //      </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //      <i class="fa-solid fa-burger"></i>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a
    //             class="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu text-center">
    //             <li className="colorRojo">Lista de favs</li>
    //             {store.favs.map((value, index) => {
    //               return (
    //                 <div key={index} className="d-flex align-items-center">
    //                   <li className="dropdown-item">{value}</li>
    //                   <button
    //                     className="m-2 btn btn-danger"
    //                     onClick={() => {
    //                       return eliminarFav(index);
    //                     }}
    //                   >
    //                     <i className="fa-solid fa-trash"></i>
    //                   </button>
    //                 </div>
    //               );
    //             })}
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled" aria-disabled="true">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <input
    //           class="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button class="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
};
