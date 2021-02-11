let userQuestion = '';
 

const answer = () => {
let randomNumber = Math.floor(Math.random() * 18);
let eightBall = randomNumber;
 
    switch(eightBall) {
    case 0:
    eightBall = 'It is certain';
    break;

    case 1:
    eightBall = 'It is decidedly so';
    break;

    case 2:
    eightBall = 'Without a doubt';
    break;

    case 3:
    eightBall = 'Yes, definitely';
    break;

    case 4:
    eightBall = 'You may rely on it';
    break;

    case 5:
    eightBall = 'As I see it, yes';
    break; 

    case 6:
    eightBall = 'Most likely';
    break; 

    case 7:
    eightBall = 'Outlook good';
    break;

    case 8:
    eightBall = 'Signs point to yes';
    break;

    case 9:
    eightBall = 'Reply hazy';
    break;

    case 10:
    eightBall = 'Try again';
    break;

    case 11:
    eightBall = 'Ask again later';
    break;

    case 12:
    eightBall = 'Better not tell you now';
    break;

    case 13:
    eightBall = 'Cannot predict now';
    break;

    case 14:
    eightBall = 'Concentrate and ask again';
    break;

    case 15:
    eightBall = "Don't count on it";
    break;

    case 16:
    eightBall = 'My reply is no';
    break;

    case 17:
    eightBall = 'My sources say no';
    break;

    case 18:
    eightBall = 'Outlook not so good';
    break;

    case 19:
    eightBall = 'Very doubtful';
    break;
    }
}
 
const shake = () => {
    var ball = document.getElementById("8ball")
    
    // add CSS class to 8ball
    ball.classList.add("shake");

    // remove call from ball so it will shake from each click 
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
}

answer();