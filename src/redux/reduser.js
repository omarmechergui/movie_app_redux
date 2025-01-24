import { ADDFILME, DELETEFILME, EDITFILME, UPDATEFILME } from "./action_type"

const initialState = {
  movies: [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "poster": "https://a.storyblok.com/f/178900/1600x900/820dd332e7/solo-leveling-reawakening-tickets-on-sale.png/m/1200x0/filters:quality(95)format(webp)",
      // "ratings": 9.3,
      // "trailer": "https://www.youtube.com/embed/jxA25ympM7M?si=7qwcvEe25i5VJ53_",
      // "Description": "Over a decade after 'gates' connecting worlds appeared, awakening 'hunters' with superpowers, weakest hunter Sung Jinwoo encounters a double dungeon and accepts a mysterious quest, becoming the only one able to level up, changing his fate.",
      // "year": 2024,
      // "dirctor": "Shunsuke Nakashige"

    },
    {
      "id": 2,
      "title": "28 Years Later",
      "poster": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@._V1_.jpg",
      // "ratings": 5.9,
      // "trailer": "https://www.youtube.com/embed/mcvLKldPM08?si=9UShSYsN5SfGhM1O",
      // "Description": "Plot under wraps. The third film in the 28 Days Later franchise.",
      // "year": 2025,
      // "dirctor": "Danny Boyle"
    }
  ],
}

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {

   case ADDFILME:
      return {
        ...state,
        movies: [...state.movies, payload]
      }
      
    case DELETEFILME:
      return {
        ...state,
        movies: state.movies.filter((filme) => filme.id !== payload)
      }
      case EDITFILME:
        return {
          ...state,
          movies: state.movies.map((filme) => filme.id === payload.id ? payload.data : filme)
        }

    

    default:
      return state
  }
}

export default movieReducer