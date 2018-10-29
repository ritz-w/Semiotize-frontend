export function fetchArtists() {
    let collections = {}
    return (dispatch) => {
    dispatch({ type: 'LOADING_ARTISTS' });
    return fetch('https://semiotize-backend.herokuapp.com/api/v1/collections/sfmoma')
    .then(res => res.json())
    .then(data => collections.sfmoma = data)
    .then(fetch('https://semiotize-backend.herokuapp.com/api/v1/collections/kiasma')
        .then(res => res.json())
        .then(data => collections.kiasma = data)
        .then(fetch('https://semiotize-backend.herokuapp.com/api/v1/collections/harvard')
            .then(res => res.json())
            .then(data => collections.harvard = data)
            .then(fetch('https://semiotize-backend.herokuapp.com/api/v1/collections/rmngp')
                .then(res => res.json())
                .then(data => collections.rmngp = data)
                .then(fetch('https://semiotize-backend.herokuapp.com/api/v1/collections/brooklyn')
                    .then(res => res.json())
                    .then(data => collections.brooklyn = data))
                    .then(() => console.log(collections))
                    .then(() => dispatch({type: 'FETCH_ARTISTS', payload: collections}))
                )
            )
        )
    }
}


export function fetchArtist(artistId) {
    return (dispatch) => {
    dispatch({ type: 'LOADING_ARTISTS' });
    return fetch(`https://semiotize-backend.herokuapp.com/api/v1/artists/${artistId}`)
    .then(res => res.json())
    .then(data => dispatch({type: "FETCH_ARTIST", payload: data}))
    }
}