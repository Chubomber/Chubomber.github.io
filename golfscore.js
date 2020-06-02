

console.log(elem15.children[4].children[0]); 

elem15.children[4].children[0].onclick 
  = function(){add1(elem15);};
elem15.children[4].children[1].onclick 
  = function(){subtract1(elem15);};

var elem16
  = document.getElementById("16");

console.log(elem16.children[4].children[0]); 

elem16.children[4].children[0].onclick 
  = function(){add1(elem16);};
elem16.children[4].children[1].onclick 
  = function(){subtract1(elem16);};

var elem17
  = document.getElementById("17");

console.log(elem17.children[4].children[0]); 

elem17.children[4].children[0].onclick 
  = function(){add1(elem17);};
elem17.children[4].children[1].onclick 
  = function(){subtract1(elem17);};

var elem18
  = document.getElementById("18");

console.log(elem18.children[4].children[0]); 

elem18.children[4].children[0].onclick 
  = function(){add1(elem18);};
elem18.children[4].children[1].onclick 
  = function(){subtract1(elem18);};
// you don't have to define the function before you use it! 
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
}
function over (elem){
  elem.children[3].innerHTML= (elem.children[2].innerHTML- elem.children[1].innerHTML);
}
/* your mission: 
1. make all the + buttons add 1 to the proper hole. 
2. make all the - buttons subtract 1 from the proper hole.
3. update the "Over" column to show the difference between par and score.
4. update row #19 with appropriate totals. Note: if a person has not finished a round, then Over/Under should apply only to holes that have been updated.
5. Add a new button, C, which clears the current score for a given hole
6. advanced: put circles around birdies and squares around bogeys!
*/
