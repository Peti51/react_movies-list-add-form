(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(8),a=i.n(n),c=(i(16),i(11)),s=i(3),l=i(2),o=(i(17),i(1)),d=(i(18),i(19),i(0)),r=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.description,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(r,{movie:e},e.imdbId)}))})},b=i(5),j=i(9),h=i.n(j);var u=function(e){var t=e.name,i=e.value,n=e.label,a=void 0===n?t:n,c=e.onChange,s=e.onDisabledChange,r=e.touchedMovies,m=e.required,b=Object(o.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),j=Object(l.a)(b,1)[0],u=Object(o.useState)(!1),g=Object(l.a)(u,2),O=g[0],v=g[1],p=r.title,f=r.description,M=r.imgUrl,x=r.imdbUrl,w=r.imdbId;return Object(o.useEffect)((function(){v(r[t]&&m&&!i)}),[p,f,M,x,w,i]),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:j,children:a}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{id:j,"data-cy":"movie-".concat(t),className:h()("input",{"is-danger":O}),type:"text",placeholder:"Enter ".concat(a),value:i,onChange:function(e){c(e.target.value,t)},onBlur:function(){0===i.length?s(!0,t):s(!1,t)}})}),O&&Object(d.jsx)("p",{className:"help is-danger",children:"".concat(a," is required")})]})},g=function(e){var t=e.newMovie,i=e.touchedMovies,n=e.setTouchedMovies,a=e.addOn,c=e.setNewMovie,r=e.valueDelete,m=e.isButtonDisabled,j=Object(o.useState)(0),h=Object(l.a)(j,1)[0],g=t.title,O=t.description,v=t.imgUrl,p=t.imdbUrl,f=t.imdbId,M=function(e,i){var n=i,a=Object(s.a)(Object(s.a)({},t),{},Object(b.a)({},n,e.trim()));c(a)},x=function(e,t){var a=t,c=Object(s.a)(Object(s.a)({},i),{},Object(b.a)({},a,e));n(c)};return Object(d.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsx)("h2",{className:"title",children:"Add a movie"}),Object(d.jsx)(u,{name:"title",label:"Title",required:!0,value:g,onChange:function(e,t){M(e,t)},onDisabledChange:function(e,t){x(e,t)},touchedMovies:i}),Object(d.jsx)(u,{name:"description",label:"Description",required:!0,value:O,onChange:function(e,t){M(e,t)},onDisabledChange:function(e,t){x(e,t)},touchedMovies:i}),Object(d.jsx)(u,{name:"imgUrl",label:"Image URL",required:!0,value:v,onChange:function(e,t){M(e,t)},onDisabledChange:function(e,t){x(e,t)},touchedMovies:i}),Object(d.jsx)(u,{name:"imdbUrl",label:"Imdb URL",required:!0,value:p,onChange:function(e,t){M(e,t)},onDisabledChange:function(e,t){x(e,t)},touchedMovies:i}),Object(d.jsx)(u,{name:"imdbId",label:"Imdb ID",required:!0,value:f,onChange:function(e,t){M(e,t)},onDisabledChange:function(e,t){x(e,t)},touchedMovies:i}),Object(d.jsx)("div",{className:"field is-grouped",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{disabled:m,type:"submit","data-cy":"submit-button",className:"button is-link",onClick:function(){a(),r()},children:"Add"})})})]},h)},O=i(10),v=function(){var e=Object(o.useState)(O),t=Object(l.a)(e,2),i=t[0],n=t[1],a=Object(o.useState)(!1),r=Object(l.a)(a,2),b=r[0],j=r[1],h=Object(o.useState)({title:!1,description:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1}),u=Object(l.a)(h,2),v=u[0],p=u[1],f=Object(o.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),M=Object(l.a)(f,2),x=M[0],w=M[1],N=x.title,U=x.description,I=x.imgUrl,D=x.imdbUrl,T=x.imdbId;return Object(o.useEffect)((function(){N.length&&U.length&&I.length&&D.length&&T.length&&j(!1),v.title&&v.description&&v.imgUrl&&v.imdbId&&v.imdbUrl&&j(!0)}),[N,I,D,T,v.title,v.description,v.imgUrl,v.imdbId,v.imdbUrl]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(m,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(g,{newMovie:x,setNewMovie:w,isButtonDisabled:b,touchedMovies:v,setTouchedMovies:p,addOn:function(){if(N.length||U.length||I.length||D.length||T.length)n([].concat(Object(c.a)(i),[x]));else{j(!0);var e=Object(s.a)(Object(s.a)({},x),{},{title:!0,description:!0,imdbId:!0,imgUrl:!0,imdbUrl:!0});p(e)}},valueDelete:function(){w({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})}})})]})};a.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8d9d0f99.chunk.js.map