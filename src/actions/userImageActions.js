export function fetchUserImages() {
    return (dispatch) => fetch('http://localhost:3000/api/v1/user_images')
    .then(res => res.json())
    .then(data => dispatch({type: "FETCH_USER_IMAGES", payload: data}))
}