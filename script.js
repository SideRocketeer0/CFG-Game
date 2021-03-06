
//this is my grammar
///////////////////////////////////////////
//////////put emoj's in at silly parts//////
var story = {
  "start": "#[char:#creator#]message#",
  "creator": ["Daniel", "SideRocketeer0", "Danny", "DannyBoo", "DannyBoi"],
  "message": "#beginning#, #welcome# This website was created to use Context free Grammars. #middle# It was recently taught at the #venue# where #char# is current enrolled at. It is to help me learn and hopefully you too. #end#. Click the button the genertate a new welcome message.",
  "beginning": ["Hello", "Welcome", "Hola como estas", "Hello user", "Well hello there", "Greetings other human", "Howdy!" ],
  "welcome": ["this is a small little website created by #char#.", "this is a big huge website created by #char#.", "this is a quiet lonely little website with no friends", "this is a portal to computer science.", "I'm going to take you on a journey of compuer science.", "My name is #char# and I made this website.", "I'm #char# and i'm going to help you learn some things.", "this was created using the tracery libary", "I hope reading the code to this website helps you"],
  "venue": ["University of Kent", "Level night club in Liverpool", "University of Edge Hill", "center of the world, kim Jong un's palace"],
  "middle": ["This website uses just normal javascript but the tracery libary used makes use of Jquery.", "Context free grammars or CFG are used in a lot of things, one of the most common is in IDE's to make sure you close functions.", "Context free grammars can get very complicated, the one used for this welcome message is very simple.", "Context free grammar's are closely related to turing machines.", "They are a simple and small part of computer science but very important."],
  "end": ["Somethings on this page may be silly", "These paragraphs will get very silly", "When generating random text something's may be silly and it may not make sense", "Because the grammar for this welcome message is simple the text cannot be truly random", "This welcome message will have a similar format everytime you generate it"]
}

var grammar;

function setup(){
  grammar = tracery.createGrammar(story);
  let result = grammar.flatten("#start#");
  document.getElementById("welcomeParagraph").innerHTML = result;
}

var assignment = {
  "S": ["#X##A#", "#B##Y#"],
  "X": "#A##S#",
  "Y": ["#Y##B#", "#A##B#"],
  "A": "a",
  "B": "b"
}

var questionG;

function question(){
  questionG = tracery.createGrammar(assignment);
  let result = questionG.flatten("#S#");
  document.getElementById("assignment").innerHTML = result;
}

/////////////////////////////////////////////////////
////////////Using No Libraries!/////////////////////
////////////////////////////////////////////////////
var rules = {
  "start": [["We need to", "adverbs", "verbs", "a new", "nouns", "because ours is too", "adjectives"]],
  "nouns": [["car"], ["government"], ["book"], ["computer"]],
  "verbs": [["get"], ["make"], ["take"]],
  "adjectives": [["fast"], ["cheap"], ["useless"], ["interesting"]],
  "adverbs": [["carefully"], ["easily"], ["sadly"]]
}

//do without reccursion???
function expand(start, expansion) {
  if(rules[start]){
    let pick = random(rules[start]);
    for(let i = 0; i < pick.length; i++){
      expand(pick[i], expansion);
    }
  } else{
    expansion.push(start);
  }
  return expansion.join(" ");
}

var start = "start";
var expansion = [];
var result = expand(start, expansion);
document.getElementById("last").innerHTML = result;

function final(){
  start = "start";
  expansion = [];
  var result = expand(start, expansion);
  document.getElementById("last").innerHTML = result;
}


function random(array){
  let value = Math.floor(Math.random() * array.length);
  return array[value];
}
