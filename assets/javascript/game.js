console.log("hello")


let randNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
console.log(randNum)
$("#randNum").html(randNum);


alex = Math.floor(Math.random() * 12) + 1;
console.log(alex)
diamond = Math.floor(Math.random() * 12) + 1;
console.log(diamond)
ruby = Math.floor(Math.random() * 12) + 1;
console.log(ruby)
sapphire = 1;
console.log(sapphire)

lose = 0;
win = 0;


score = 0;
$("#score").text(score);

function win() {
    win = win + 1;
    $("#wins").html(wins);
    reset();
}

function lose() {
    lose = lose + 1;
    $("#loss").html(wins);
    reset();
}

$('#alex').click((){
score = score + alex
$("#currScore").text(score);
if(score === randNum){
    win();
    reset();
}
else if (score > randNum){
    lose();
    reset();
}

});
   
//cant figure how to make the buttons add to my score. 
//whenever i try it always pops up as a syntax error.
// with the syntax error it removes my display of the current score.
function reset() {
    score = 0;
    $('#score').text(score);
}