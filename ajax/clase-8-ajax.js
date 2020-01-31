
const url = 'https://rickandmortyapi.com/api/';
let personajes = [];
$.ajax({
  url: `${url}/character`,
  crossDomain: true,
  success: function(response){
      personajes = response.results;
      console.log(personajes);
  }
});
