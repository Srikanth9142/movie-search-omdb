import React from 'react';
import MovieItem from './MovieItem';


function SearchResults({results,openDetail}) {
    return (
        <div className="SearchResults-container">
            {
                results.map(item=>{
                    return(<MovieItem key={item.imdbID} Listitem={item} openDetail={openDetail} />)
                })
            }
            
        </div>
    )
}

export default SearchResults
