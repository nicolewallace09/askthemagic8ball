var userQuestion = '';
 
var randomNumber = Math.floor(Math.random() * 8);
 
var eightBall = randomNumber
 
switch(eightBall) {
 case 0:
   eightBall = 'It is certain';
   break;
 case 1:
   eightBall = 'It is decidedly so';
   break;
 case 3:
   eightBall = 'Rely hazy try again';
   break;
 case 4:
   eightBall = 'Cannot predict now';
   break;
 case 5:
   eightBall = 'Do not count on it';
   break;
 case 6:
   eightBall = 'My sources say no';
   break;
 case 7:
   eightBall = 'Outlook not so good';
   break;
 case 9:
   eightBall = 'Signs point to yes';
   break;
}
 
const shake = () => {
    var ball = document.getElementById("8ball")
    
    // add CSS class to 8ball
    ball.classList.add("shake");

    // remove call from ball so it will shake from each click 
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
}