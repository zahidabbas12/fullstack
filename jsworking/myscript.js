const a = 9;

const b = 7;

console.log(a);

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    return response.json();
  }).then((data) => {
    
      document.getElementById("cname").innerHTML = data.forms[0].name
      document.getElementById("img").src = data.sprites.front_default;
      
      data.abilities.map((a)=>{
        document.getElementById("abilities").innerHTML += `<li>${a.ability.name}</li>`
      })

    
  }).
  catch((error)=>{
    console.error(error)
  });

console.log(b);
