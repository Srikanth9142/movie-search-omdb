(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{57:function(e,t,a){e.exports=a(85)},62:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(62),a(12)),i=a(50),s=a(116),u=a(49),m=a.n(u),d=a(115);var v=function(e){return r.a.createElement("div",null,r.a.createElement(d.a,{id:"outlined-basic",label:"Search for a movie...",variant:"outlined",className:"searchBar",onChange:e.handleInput,onKeyPress:e.searchEvent}),r.a.createElement(s.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(m.a,null),onClick:function(){return e.searchButtonClick()}}," Search"))};var h=function(e){var t=e.Listitem,a=e.openDetail;return r.a.createElement("div",{className:"Movie-card",onClick:function(){return a(t.imdbID)}},r.a.createElement("h4",null,t.Title),r.a.createElement("p",null,"Year: ",t.Year),r.a.createElement("img",{src:t.Poster,className:"Movie-card-image",alt:t.Title}))};var E=function(){return r.a.createElement("div",null,r.a.createElement("h4",{className:"Not-found-h4"},"Movie Not Found ..."),r.a.createElement("p",null,"Try Another one"))};var f=function(e){var t=e.results,a=e.openDetail;return r.a.createElement("div",{className:"SearchResults-container"},"undefined"!==typeof t?t.map((function(e){return r.a.createElement(h,{key:e.imdbID,Listitem:e,openDetail:a})})):r.a.createElement(E,null))};var p=function(e){var t=e.item,a=e.closeDetail;return r.a.createElement("div",{className:"Movie-Detail"},r.a.createElement("h4",null,t.Title," - ",t.Year),r.a.createElement("h5",null,"Genre: ",t.Genre),r.a.createElement("img",{src:t.Poster,alt:t.Title}),r.a.createElement("p",null,r.a.createElement("strong",null,"Plot: "),t.Plot),r.a.createElement("p",null,r.a.createElement("strong",null,"Rating: ",t.imdbRating)),r.a.createElement(s.a,{variant:"contained",color:"secondary",onClick:function(){return a()}},"Close"))},b=a(29),g=a.n(b);var N=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(i.a)(e,2),a=t[0],c=t[1],l="http://www.omdbapi.com/?apikey=921b06eb";return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"search-container"},r.a.createElement("h2",null,"Movie Search"),r.a.createElement(v,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{s:t})})),console.log(a.s)},searchEvent:function(e){"Enter"===e.key&&g()(l+"&s="+a.s).then((function(e){var t=e.data.Search;console.log(t),c((function(e){return Object(o.a)(Object(o.a)({},e),{},{results:t})}))}))},searchButtonClick:function(){g()(l+"&s="+a.s).then((function(e){var t=e.data.Search;console.log(t),c((function(e){return Object(o.a)(Object(o.a)({},e),{},{results:t})}))}))}})),r.a.createElement("div",{className:"body-container"},r.a.createElement("div",{className:"SearchResults-container-container"},r.a.createElement(f,{results:a.results,openDetail:function(e){g()(l+"&i="+e).then((function(e){var t=e.data;console.log(t),c((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:t})}))}))}})),r.a.createElement("div",{className:"MovieDetail-container"},"undefined"!=typeof a.selected.Title&&r.a.createElement(p,{item:a.selected,closeDetail:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:{}})}))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.9e1be7f5.chunk.js.map