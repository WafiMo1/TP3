function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  //DECLARER VARIABLES

// CLUB
    const club_ul = document.getElementById("club");
  const url = "http://localhost:8080/ords/tp3/club";
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      //CE SONT DES ALIAS
      let clubNum = data.items; //.results;
      return clubNum.map(function (club) {
        let ta = createNode("p"),
        span = createNode("span");
        span.innerHTML = `Numéro du club: ${club.num_club} `;//ORDRE DÉCIDÉ
        append(ta, span);
        append(club_ul, ta);
});
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
      });