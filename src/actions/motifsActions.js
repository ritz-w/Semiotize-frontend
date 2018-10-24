export function fetchMotifs() {
    return (dispatch) => {
    dispatch({ type: 'LOADING_MOTIFS' });
    return fetch('http://localhost:3000/api/v1/motifs')
    .then(res => res.json())
    .then(data => dispatch({type: "FETCH_MOTIFS", payload: data}))
    }
}