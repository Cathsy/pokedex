$(function() {
  var currentPokemonId = 1;

  function getPokemon(id_nombre){
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id_nombre}`, function(data){
      var nombrepkmn = data.name;
      var imgpkmn = data.sprites.other['official-artwork'].front_default;
      var imgpkmn_alt = data.sprites.front_default;
      currentPokemonId = data.id;  
      $("#pokemon-image").attr('src', imgpkmn);
      $("#pokemon-image").attr('alt', imgpkmn_alt);
      $('#nombrePkmn').text(nombrepkmn);
    });
  }
  
  $('#buscar').click(function(event){
    getPokemon($('#pokemon').val())
  });
  
  $('#atras').click(function(event){
    getPokemon(currentPokemonId-1)
  });

  $('#siguiente').click(function(event){
    getPokemon(currentPokemonId+1)
  });

});
