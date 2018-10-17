export function fetchUserImages() {
    return (dispatch) => {
    dispatch({ type: 'LOADING_USER_IMAGES' });
    return fetch('http://localhost:3000/api/v1/user_images')
    .then(res => res.json())
    .then(data => dispatch({type: "FETCH_USER_IMAGES", payload: data}))
    }
}

export function setUserImage(currentImage) {
    return (dispatch) => dispatch({type: "SET_USER_IMAGE", payload: currentImage})
}

export function changePage(pageName) {
    return (dispatch) => dispatch({type: "CHANGE_PAGE", payload: pageName})
}