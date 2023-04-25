/**
 * questions and answers array
 */
let myQuestions = [
    {
        question: '1.Who has been sent as a mercy to the worlds?',
        options: [
            {option: 'Prophet Jesus (PBUH)', answer: true},
            {option: 'Prophet Muhammad (PBUH)', answer: false},
            {option: 'Prophet Moses (PBUH)', answer: false},
            {option: 'Prophet Abraham (PBUH)', answer: false}
        ],
    },       
    {
        question: '2. Who has Allah mentioned in the Quran as the best example to follow?',
        options: [ 
            {option: 'Prophet Muhammad (PBUH)', answer: true},
            {option: 'Pharaoh', answer: false},
            {option: 'Angels', answer: false},
            {option: 'Jinn', answer: false}
        ],
    },
    {
        question: '3. How many prophets are mentioned in the Quran?',
        options: [ 
            {option: '29', answer: false},
            {option: '25', answer: true},
            {option: '27', answer: false},
            {option: '26', answer: false}
        ],
    },
    {
        question: '4. To which prophet did Allah directly speak to?',
        options: [
            {option: 'Prophet Jesus (PBUH)', answer: false},
            {option: 'Prophet Abraham (PBUH)', answer: false},
            {option: 'Prophet Moses (PBUH)', answer: true},
            {option: 'Prophet David (PBUH)', answer: false}
        ],
    },
    {
        question: '5. The expansion theory was first mentioned..',
        options: [
            {option: 'By Edwin Hubble 1929', answer: false},
            {option: 'By Georges Lemaître 1920', answer: false},
            {option: 'In the Quran over 1400 years ago (surah:verse 51:47)', answer: true},
            {option: 'In the Quran over 1400 years ago (surah:verse 51:47)', answer: true}
        ],
    },
    {
        question: '6. To which prophet did Allah order to build an ark?',
        options: [
            {option: 'Prophet Noah (PBUH)', answer: true},
            {option: 'Prophet Abraham (PBUH)', answer: false},
            {option: 'Followers of Prophet Muhammad (ﷺ)', answer: false},
            {option: 'Prophet David (PBUH)', answer: false}
           
        ],
    },
    {
        question: '7. Who is the last Messenger of Allah?',
        options: [
            {option: 'Prophet Abraham (PBUH)', answer: false},
            {option: 'Prophet Muhammad (PBUH)', answer: true},
            {option: 'Prophet Moses (PBUH)', answer: false},
            {option: 'Prophet Jesus (PBUH)', answer: false}
        ],
    },
    {
        question: '8. What does the religion of Islam preach?',
        options: [
            {option: 'Islam preaches the oneness of God, and that there is no God except Allah', answer: true},
            {option: 'Islam does not preach anything', answer: false},
            {option: 'Islam preaches Idolatry', answer: false},
            {option: 'Islam preaches that there are many Gods', answer: false}
        ],
    },
    {
        question: '9. What is the meaning of Islam?',
        options: [
            {option: 'Islam means peace acquired by submitting your will to Allah, the Exalted', answer: true},
            {option: 'Islam means a new religion', answer: false},
            {option: 'Islam means a religion only for Arabs', answer: false},
            {option: 'There is no meaning of Islam', answer: false}
        ],
    },
    {
        question: '10. What is the calendar which Muslims use?',
        options: [
            {option: 'Gregorian Calendar', answer: false},
            {option: 'Roman Calendar', answer: false},
            {option: 'Hijrah', answer: true},
            {option: 'Persian Calendar', answer: true}
        ],
    }];

/**
 * function to start the quize 
 */
let start = document.getElementById('start-quiz');
let quizQuestion = document.getElementById('question-number');
let quizOption = document.getElementsByClassName('option-number');
let quizInfo = document.getElementById('quiz-info');
let quiz = document.getElementById('quiz-questions');
let next = document.getElementById('next');
let previous = document.getElementById('previuos');
let totalScore = document.getElementById('total-score');
let playAgain = document.getElementById('again-quiz');
let result = document.getElementById('result');
let score = document.getElementById('score');
let correctAns = 0;
let incorrect = 0;
let currentQuestion;

let nextPrevious = document.getElementById('next-previous');


start.addEventListener('click', startQuiz);
next.addEventListener('click', displayQuestion);
playAgain.addEventListener('click', playAgainFunction);
currentQuestion = 0;

/* 
 * hide quiz and result area when window is loaded and 
 * display the score-area
 */
window.onload = function startPage() {
   
    quiz.style.display ='none';
    nextPrevious.style.display ='none';
    totalScore.style.display = 'none';
    playAgain.style.display = 'none';
    result.style.display = 'none';
};


function startQuiz(){
    start.style.display = 'none';
    quizInfo.style.display = 'none';
    quiz.style.display = 'contents';
    nextPrevious.style.display ='contents';
    currentQuestion = 0;
    score = 0;

   
displayQuestion1();
 
    
}
function displayQuestion1(){
    quizQuestion.innerHTML = myQuestions[0].question;
   
     for (let i = 0; i < 4; i++) {
        let btn = quizOption[i];
        btn.innerHTML = myQuestions[0].options[i].option;
    }
    currentQuestion++;
}

function displayQuestion(){
   
    for(let i = 1; i <= currentQuestion;i++){
       
        quizQuestion.innerHTML = myQuestions[i].question;
        
        for (let j = 0; j < 4; j++) {
            let btn = quizOption[j];
            btn.innerHTML = myQuestions[i].options[j].option;
        }
       
    }
   
    if(currentQuestion <= 10){
        currentQuestion = currentQuestion + 1;
    }
        
    if(currentQuestion === 10){
            console.log(currentQuestion);
            console.log('dtfyguhjhkl');
            quiz.style.display = 'none';
            nextPrevious.style.display = 'none';
            playAgain.style.display = 'contents';
            result.style.display ='contents';
    }
     
    
    enableOptions();
    
              

}
function playAgainFunction(){
  
    window.location.assign("index.html");
}

/**
 * function to check if user has clicked the true/false option
 */
const choices = document.querySelectorAll('.option-number');
choices.forEach(choice => choice.addEventListener('click', checkAnswer));

function checkAnswer() {
    
    console.log('dxfghkjklö');
    console.log(currentQuestion);
    let correctAnswer = myQuestions[currentQuestion].options.find(element => element.answer === true);
        //checks if answer is true or false as well as updating score
        console.log(currentQuestion);
        if (correctAnswer.option === this.innerText){
            console.log('qwertyuiopå' + currentQuestion);
            incrementScore();
            //add class if correct
            console.log('checked');
            this.classList.add('correct');
        } else {
            //add class if incorrect
            this.classList.add('incorrect');
        }
    
    console.log(correctAnswer);
    
}

/**
 * function to enable answer options when next question is comming
 */
function enableOptions(){

    document.getElementById('option1').style.pointerEvents = 'all';
    document.getElementById('option2').style.pointerEvents = 'all';
    document.getElementById('option3').style.pointerEvents = 'all';
    document.getElementById('option4').style.pointerEvents = 'all';
   
}

/**
 * increment score both current and at the end of result page
 */
function incrementScore() {

    let oldScore = document.getElementById("score").innerText;
    document.getElementById("score").innerText = ++oldScore;

    

}
/**
 * function to go to next question and at end of game, displays the result area
 * and play again-button
 */

function nextQuestion(currentQuestion) {

    
}
/**
 * function that disable options when one is clicked
 */
function disable() {

    document.getElementById('option1').style.pointerEvents = 'none';
    document.getElementById('option2').style.pointerEvents = 'none';
    document.getElementById('option3').style.pointerEvents = 'none';
    document.getElementById('option4').style.pointerEvents = 'none';

}
/**
 * contact us page 
 */
let form = document.getElementById("feedback-form");
form.addEventListener('submit',handleSubmit);

let errorMsg = document.getElementById("errors");
/**
 * function to handle the click event on submit button
 */
function handleSubmit(event){
    event.preventDefault();
    
    let name = document.getElementById('full-name').value;
    Swal.fire(`Submitted! Thank you ${name[0]} for your feedback`);
    
    
}
