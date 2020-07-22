import React,{ useState }  from 'react';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import MovieDetail from './components/MovieDetail';
import axios from 'axios';

function App() {
  const [state,setState] = useState({
    s:"",
    results:[],
    selected:{}
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=921b06eb";
  const handleInput = (e)=>{
    let s = e.target.value;
    setState(prevState=>{
      return {...prevState,s:s}
    });
    
    console.log(state.s);

  }
  const searchEvent = (e)=>{
    if(e.key ==="Enter"){
      axios(apiUrl+"&s="+state.s).then(({data})=>{
        let results = data.Search;
        console.log(results);
        setState(prevState=>{
          return {...prevState,results:results}
        })
        
      })
      
    }
  }
  const searchButtonClick = ()=>{
      axios(apiUrl+"&s="+state.s).then(({data})=>{
        let results = data.Search;
        console.log(results);
        setState(prevState=>{
          return {...prevState,results:results}
        })
        
      })
      
  }
  const openDetail = id=>{
    axios(apiUrl+"&i="+id).then(({data})=>{
      let detail = data;
      console.log(detail);

      setState(prevState=>{
        return {...prevState,selected:detail}
      });
      //console.log(state.selected);
    })
  }

  const closeDetail = ()=>{
    setState(prevState=>{
      return {...prevState,selected:{}}
    });
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-container">
            <h2>Movie Search</h2>
            <Search handleInput={handleInput} searchEvent={searchEvent} searchButtonClick={searchButtonClick}></Search>
        </div>
        <div className="body-container">
          <div className="SearchResults-container-container">
              <SearchResults results={state.results} openDetail={openDetail}></SearchResults>
          </div>
            <div className="MovieDetail-container">
              {(typeof (state.selected.Title)!="undefined")?<MovieDetail item={state.selected} closeDetail={closeDetail}/>:false}
            </div>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
