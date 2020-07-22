import React from 'react'
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';

function MovieItem({Listitem,openDetail}) {
    return (
        <div className="Movie-card" onClick={()=>openDetail(Listitem.imdbID)}>
            <h4>{Listitem.Title}</h4>
            <p>Year: {Listitem.Year}</p>
            <img src={Listitem.Poster} className="Movie-card-image" alt={Listitem.Title}></img>
        </div>
        

    )
}

export default MovieItem
