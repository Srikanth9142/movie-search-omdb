import React from 'react'
import { Button } from '@material-ui/core'

function MovieDetail({item,closeDetail}) {
    return (
        <div className="Movie-Detail">
            <h4>{item.Title} - {item.Year}</h4>
            <h5>Genre: {item.Genre}</h5>
            <img src={item.Poster} alt={item.Title} />
            <p><strong>Plot: </strong>{item.Plot}</p>
            <p><strong>Rating: {item.imdbRating}</strong></p>
            <Button variant="contained" color="secondary" onClick={()=>closeDetail()}>Close</Button>
        </div>
    )
}

export default MovieDetail
