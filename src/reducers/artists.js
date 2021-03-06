export default (state = {harvard: [], rmngp: [], kiasma: [], sfmoma: [], brooklyn: [], currentArtist: "", isLoading: false}, action) => {
    switch (action.type) {
      case "LOADING_ARTISTS" :
      console.log(action)
      return state = {...state, isLoading: true};
      case "FETCH_ARTISTS" :
      console.log(action)
      state = {...state, brooklyn: action.payload.brooklyn, harvard: action.payload.harvard, rmngp: action.payload.rmngp, kiasma: action.payload.kiasma, sfmoma: action.payload.sfmoma, isLoading: false};
      console.log(state)
      return state = {...state, brooklyn: action.payload.brooklyn, harvard: action.payload.harvard, rmngp: action.payload.rmngp, kiasma: action.payload.kiasma, sfmoma: action.payload.sfmoma, isLoading: false};
      case "FETCH_ARTIST" :
      console.log(action)
      return state = {...state, currentArtist: action.payload, isLoading: false};
      default :
      return state;
    }
  }
  