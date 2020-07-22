import React from 'react';
import MovieItem from './MovieItem';
import NotFound from './NotFound';

function SearchResults({results,openDetail}) {
    return (
        <div className="SearchResults-container">
            {
                (typeof results)!=="undefined"?results.map(item=>{
                    return(<MovieItem key={item.imdbID} Listitem={item} openDetail={openDetail} />)
                }):<NotFound/>
            }
            
        </div>
    )
}

export default SearchResults
