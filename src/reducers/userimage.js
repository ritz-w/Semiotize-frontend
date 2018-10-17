export default (state = {allUserImages: [], currentImage: "", currentPage: "Front", isLoading: false}, action) => {
    switch (action.type) {
      case "LOADING_USER_IMAGES" :
      console.log(action)
      return state = {...state, isLoading: true};
      case "FETCH_USER_IMAGES" :
      console.log(action)
      return state = {...state, allUserImages: action.payload, isLoading: false};
      case "SET_USER_IMAGE" :
      console.log(action)
      return state = {...state, currentImage: action.payload};
      case "CHANGE_PAGE" :
      console.log(action)
      return state = {...state, currentPage: action.payload};
      default :
      return state;
    }
  }
  