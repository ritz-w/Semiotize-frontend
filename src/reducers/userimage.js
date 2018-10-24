export default (state = {allUserImages: [], threeUserImages: [], threeLoading: false, isLoading: false}, action) => {
    switch (action.type) {
      case "LOADING_USER_IMAGES" :
      console.log(action)
      return state = {...state, isLoading: true};
      case "FETCH_USER_IMAGES" :
      console.log(action)
      return state = {...state, allUserImages: action.payload, isLoading: false};
      case "LOADING_THREE_USER_IMAGES" :
      console.log(action)
      return state = {...state, threeLoading: true};
      case "FETCH_THREE_USER_IMAGES" :
      console.log(action)
      return state = {...state, threeUserImages: action.payload, threeLoading: false};
      default :
      return state;
    }
  }
  