// CUBE
let cube = document.querySelector("#cube");
let cubeMovements = [
  "cube-show-front",
  "cube-show-right",
  "cube-show-back",
  "cube-show-left",
  "cube-show-top",
  "cube-show-bottom",
];
let movesCount = cubeMovements.length;
let nextMove;
let lastMove;

// It will rotate the cube every 1.5 seconds
function cubeRotate() {
  let randomNumber = Math.floor(Math.random() * movesCount);
  nextMove = cubeMovements[randomNumber];
  cube.classList.remove(lastMove);
  cube.classList.add(nextMove);
  lastMove = nextMove;
}
setInterval(cubeRotate, 1500);

cubeRotate();

// // // It will change the position of the cube in the header
// let cubePositions = [
//   "cube__position-70",
//   "cube__position-10",
//   "cube__position-30",
//   "cube__position-50",
// ];
// let cubeSides = document.querySelectorAll(".cube__side");
// let nextPosition;
// let lastPosition;
// let cubePositionsCount = cubePositions.length;
// let cubeContainer = document.querySelector("#cube_container");

// function cubePosition() {
//   nextPosition = cubePositions[Math.floor(Math.random() * cubePositionsCount)];
//   console.log(nextPosition);
//   // Change each side individually to make a cool 3D effect
//   cubeSides.forEach((side) => {
//     side.classList.remove(lastPosition);
//     side.classList.add(nextPosition);
//   });
//   lastPosition = nextPosition;

//   // Change the position of hte cube Container itself
//   let topCubePosition = Math.floor(Math.random() * 100).toString();
//   let LeftCubePosition = Math.floor(
//     (Math.random() - Math.random() * 2) * 100
//   ).toString();
//   cubeContainer.style.top = topCubePosition;
//   cubeContainer.style.left = LeftCubePosition;
//   console.log(topCubePosition, LeftCubePosition);
// }
// setInterval(cubePosition, 5000);
// cubePosition();

// texttyping animations (This will make the text animation only appear if the the user reach section title where the text is appearing )
let projectsTitle = document.querySelector("#projectsTitle");
let aboutTitle = document.querySelector("#aboutTitle");
let contactTitle = document.querySelector("#contactTitle");
let options = {
  rootMargin: "0px 0px 100px 0px",
  threshold: 1.0,
};
let titlesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log();
    if (entry.isIntersecting) {
      entry.target.classList.add("animation--typewriter");
      entry.target.classList.remove("invisible");
      console.log("WORKED");
      titlesObserver.unobserve(entry.target);
    }
  });
}, options);

titlesObserver.observe(projectsTitle);
titlesObserver.observe(aboutTitle);
titlesObserver.observe(contactTitle);

// Triva box. The user will click the button "new trivia" and a new trivia about me will be typed in the trivia text box.
// All of the trivias are going to show up before a repeat one appear again.
let inicialTrivias = ["My blood is A+", "I'm 1.70m tall", "I already went to Egypt", "My favorite weather is rainy days"];
let remainingTrivias = inicialTrivias.slice(0);
let triviaButton = document.querySelector("#trivia__button");
let triviaText = document.querySelector("#trivia__text");
let newTrivia;

console.log(remainingTrivias)


function changeTrivias(){

  // Start to repeat trivias after all the trivias haven been show, in case there are not more remaining trivias.
  if(remainingTrivias.length <= 0){
    remainingTrivias = inicialTrivias.slice(0);
    // Remove current trivia appearing for the user. This last step is necessary to prevent the user form pressing the button and a new trivia not appearing.
    remainingTrivias.splice(remainingTrivias.indexOf(newTrivia), 1);
  }
  // Create a random number between 0 and the remaining trivias length.
  let randomNumber = Math.floor([Math.random() * remainingTrivias.length]);
  // Choose a new trivia using the random number
  newTrivia = remainingTrivias[randomNumber];
  // Remove the chosen trivia from the remaining array
  remainingTrivias.splice(randomNumber, 1);
  console.log(newTrivia, remainingTrivias); 


  // Change the html to show  new trivia
  triviaText.innerHTML = newTrivia;
}
// Call before user press the button. 
changeTrivias();
triviaButton.addEventListener("click", () => changeTrivias());
