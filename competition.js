function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  //DECLARER VARIABLES


    //COMPÉTITION
    const competition_ul = document.getElementById("compétition");
  const url2 = "http://localhost:8080/ords/tp3/compétition";
  fetch(url2)
  .then((resp) => resp.json())
  .then(function (data) {
    //CE SONT DES ALIAS
    let employees = data.items; //.results;
    return employees.map(function (competition) {
      let to = createNode("p"),
      span = createNode("span");
      span.innerHTML = `Numéro de compétition: ${competition.num_competition} `;//ORDRE DÉCIDÉ
      append(to, span);
      append(club_ul, to);
});
  })

  .catch(function (error) {
    console.log(JSON.stringify(error));
  });