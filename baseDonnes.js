function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  //DECLARER VARIABLES
  /* const club_ul = document.getElementById("clubs");
  const url = "http://localhost:8080/ords/tp3/club";
  const trophée_ul = document.getElementById("trophée");
  const url = "http://localhost:8080/ords/tp3/trophée";
  const club_ul = document.getElementById("compétition");
  const url = "http://localhost:8080/ords/tp3/compétition"; */
  const athlete_ul = document.getElementById("toto");
  const url = "http://localhost:8080/ords/tp3/athlète";
  //METTRE POUR CHAQUE TABLE URL
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      //CE SONT DES ALIAS
      let employees = data.items; //.results;
      return employees.map(function (ath) {
        let tr = createNode("p"),
        span = createNode("span");
        span.innerHTML = `Nom: ${ath.nom} `;//ORDRE DÉCIDÉ
        append(tr, span);
        append(athlete_ul, tr);
});
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });