const answer = () => {
    let question = document.getElementById("question"); 

    let randomNumber = Math.floor(Math.random() * 18);
    let eightBall = randomNumber;
 
    if(question.value.length > 1) {
        switch(eightBall) {
        case 0:
        eightBall = 'it is certain';
        break;

        case 1:
        eightBall = 'it is decidedly so';
        break;

        case 2:
        eightBall = 'without a doubt';
        break;

        case 3:
        eightBall = 'yes, definitely';
        break;

        case 4:
        eightBall = 'you may rely on it';
        break;

        case 5:
        eightBall = 'as i see it, yes';
        break; 

        case 6:
        eightBall = 'most likely';
        break; 

        case 7:
        eightBall = 'outlook good';
        break;

        case 8:
        eightBall = 'signs point to yes';
        break;

        case 9:
        eightBall = 'reply hazy';
        break;

        case 10:
        eightBall = 'try again';
        break;

        case 11:
        eightBall = 'ask again later';
        break;

        case 12:
        eightBall = 'better not tell you now';
        break;

        case 13:
        eightBall = 'cannot predict now';
        break;

        case 14:
        eightBall = 'concentrate and ask again';
        break;

        case 15:
        eightBall = "don't count on it";
        break;

        case 16:
        eightBall = 'my reply is no';
        break;

        case 17:
        eightBall = 'my sources say no';
        break;

        case 18:
        eightBall = 'outlook not so good';
        break;

        case 19:
        eightBall = 'very doubtful';
        break;
    }

    // displaying answer. call when during shake(); 
    let displayAnswer = document.getElementById("answer");
    let message = document.createElement("p");
    message.setAttribute('id', 'answerText')
    message.innerHTML = eightBall;
    displayAnswer.appendChild(message); 

     // remove if there is a previous question 
    let previousQuestion = document.getElementById("question")
        if(previousQuestion != null){
            previousQuestion.value = '';
     }
    

    } else {
        window.alert("Please ask a question")
    }
}


 
const shake = () => {
    let ball = document.getElementById("8ball")

    // remove if there is a previous answer
    let previousAnswer = document.getElementById("answerText")
    if(previousAnswer != null){
        previousAnswer.parentNode.removeChild(previousAnswer);
    }
    
    // add CSS class to 8ball
    ball.classList.add("shake");

    // remove call from ball so it will shake from each click 
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);

    answer();
}

