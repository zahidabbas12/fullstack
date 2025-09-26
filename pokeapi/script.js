    fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response)=>{
        return response.json();
    }).then((data)=>{
        document.getElementById("cname").innerHTML =data.forms[0].name.toUpperCase();
        document.getElementById("img").src = data.sprites.front_default;
        data.abilities.map((a)=>{
            document.getElementById("abilities").innerHTML += `<li>${a.ability.name}</li>`
        });
        document.getElementById("stats").innerHTML = data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join("");
    }).then((error)=>{
        console.error(error)
    });
