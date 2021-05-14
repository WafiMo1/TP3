function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  //DECLARER VARIABLES


    //COMPÉTITION
    const competition_ul = document.getElementById("compétition");
  const url = "http://localhost:8080/ords/tp3/compétition";
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    //CE SONT DES ALIAS
    let competitionNum = data.items; //.results;
    return competitionNum.map(function (competition) {
      let to = createNode("p"),
      span = createNode("span");
      span.innerHTML = `Numéro de compétition: ${competition.num_compétition} `;//ORDRE DÉCIDÉ
      append(to, span);
      append(club_ul, to);
});
  })

  .catch(function (error) {
    console.log(JSON.stringify(error));
  });