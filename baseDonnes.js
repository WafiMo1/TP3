function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  //DECLARER VARIABLES
  /* 
  const trophée_ul = document.getElementById("trophée");
  const url = "http://localhost:8080/ords/tp3/trophée"; */

  const athlete_ul = document.getElementById("nomParticipant");
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
        span.innerHTML = `Nom du participant: ${ath.nom} `;//ORDRE DÉCIDÉ
        append(tr, span);
        append(athlete_ul, tr);
});
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
    const athlete_ul = document.getElementById("gradeParticipant");
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
          span.innerHTML = `Grade du participant: ${ath.grade_ceinture} `;//ORDRE DÉCIDÉ
          append(tr, span);
          append(athlete_ul, tr);
  });
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
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

    //COMPÉTITION
    const club_ul = document.getElementById("compétition");
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
  
 