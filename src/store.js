import { LearnMorePeople } from "./pages/LearnMorePeople";

export const initialStore=()=>{
  return{
    people : [],
    planets: [],
    starships: [],
    learnMorePeople: [],
    learnMorePlanets:[],
    learnMoreStarships:[],
    favs:[],


  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'llamadoApiPeople' :

      return {
        ...store,
        people: action.payload
      };
      case 'llamadoApiPlanets' :

      return {
        ...store,
        planets: action.payload
      };
      case 'llamadoApiStarships' :

      return {
        ...store,
        starships: action.payload
      }

      case 'learnMorePeople' :
        return {
          ...store,
          learnMorePeople: action.payload

        }
      case 'learnMorePlanets' :
        return {
          ...store,
          learnMorePlanets: action.payload

        }
      case 'learnMoreStarships' :
        return {
          ...store,
          learnMoreStarships: action.payload

        }

        case 'favs':
          // let favsCopy = [...store.favs]
          // favsCopy.push(action.payload)
          return {
            ...store,
            favs: [...store.favs, action.payload]
          }

          case 'eliminarFavs':
          let newFavs = store.favs.filter((_,i)=> i !== action.payload)
          return {
            ...store,
            favs: newFavs
          }
    default:
      throw Error('Unknown action.');
  }    
}
