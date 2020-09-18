var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;
//


  if (randomVariable1 === 1) {
    document.querySelector("dice .img1").setAttribute("src", "images/dice1.png");
  }
  elseif(randomVariable1 === 2) {
    document.querySelector("dice .img1").setAttribute("src", "images/dice2.png");
  }
  elseif(randomVariable1 === 3) {
    document.querySelector("dice .img1").setAttribute("src", "images/dice3.png");
  }
  elseif(randomVariable1 === 4) {
    document.querySelector("dice .img1").setAttribute("src", "images/dice4.png");
  }
  elseif(randomVariable1 === 5) {
    document.querySelector("dice .img1").setAttribute("src", "images/dice5.png");
  }
  else(randomVariable1 > 5) {
    document.querySelector("dice .img1").setAttribute("src", "images/dice6.png");
  }

//  SECOND ALTERNATIVE

// var image1 = "images/dice"+randomVariable1+".png"
// var image2 = "images/dice"+randomVariable2+".png"
//
// document.querySelector("img.img1").setAttribute("src",image1);
// document.querySelector("img.img2").setAttribute("src",image2);
//
// if (randomVariable1===randomVariable2) {
//   document.querySelector("h1").innerHTML="Draw!!";
// }else if (randomVariable1>randomVariable2) {
//   document.querySelector("h1").innerHTML="Player1 has Won!!";
// }else {
//   document.querySelector("h1").innerHTML="Player 2 has Won!!";
// }
