const boutonGuillaume = () => {
  let element2 = document.querySelector("#player1_race .active + td");
  if (element2 === null) {
    confirm("GUILLAUME FUCK YOU BITCH");
  } else {
    let element = document.querySelector("#player1_race .active");
    element.classList.remove("active");
    element2.classList.add("active");
  }
};

const boutonYann = () => {
  let element2 = document.querySelector("#player2_race .active + td");
  if (element2 === null) {
    confirm("Yann Is THE BEEEEEEEST");
  } else {
    let element = document.querySelector("#player2_race .active");
    element.classList.remove("active");
    element2.classList.add("active");
  }
};


document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    boutonGuillaume();
  } else if (event.key === "m") {
    boutonYann();
  }
});



// const player2 = document.getElementById("#player2_race");
// player1.addEventListener("keydown", (event) => {
//   event.currentTarger.boutonGuillaume()
// });

// const romain = document.getElementById("romain");
// romain.addEventListener("click", (event) => {
//   console.log(event);
// //   console.log(event.currentTarget);
// // });
// button.addEventListener("click", (event) => {
//   event.currentTarget.classList.toggle("disabled");
//   event.currentTarget.innerHTML = "Bingo!";
//   });
