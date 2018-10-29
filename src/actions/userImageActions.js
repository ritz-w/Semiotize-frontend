export function fetchUserImages() {
    return (dispatch) => {
    dispatch({ type: 'LOADING_USER_IMAGES' });
    return fetch('https://semiotize-backend.herokuapp.com/api/v1/user_images')
    .then(res => res.json())
    .then(data => dispatch({type: "FETCH_USER_IMAGES", payload: data}))
    }
}

export function fetchFirstThree() {
    return (dispatch) => {
    dispatch({ type: 'LOADING_THREE_USER_IMAGES' });
    return fetch('https://semiotize-backend.herokuapp.com/api/v1/user_images/three')
    .then(res => res.json())
    .then(data => dispatch({type: "FETCH_THREE_USER_IMAGES", payload: data}))
    }
}
