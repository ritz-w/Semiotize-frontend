export default (state = {allMotifs: []}, action) => {
    switch (action.type) {
      case "LOADING_MOTIFS" :
      console.log(action)
      return state = {...state, isLoading: true};
      case "FETCH_MOTIFS" :
      console.log(action)
      return state = {...state, allMotifs: action.payload, isLoading: false};
      default :
      return state;
    }
  }
  