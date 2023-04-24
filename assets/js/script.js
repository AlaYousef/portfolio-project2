/**
 * questions and answers array
 */
let myQuestions = [
    {
        question: '1.Who has been sent as a mercy to the worlds?',
        options: [
            {option: 'Prophet Jesus (PBUH)', answer: false},
            {option: 'Prophet Muhammad (PBUH)', answer: true},
            {option: 'Prophet Moses (PBUH)', answer: false}
        ],
    },       
    {
        question: '2. The word "Shahr" (month) is mentioned in the Quran..',
        options: [ 
            {option: '33 times', answer: false},
            {option: '99 times', answer: false},
            {option: '12 times', answer: true}
        ],
    },
    {
        question: '3. The correct stages of development of the embryo was first mentioned..',
        options: [ 
            {option: 'By Hans Adolf Eduard Driesch 1890', answer: false},
            {option: 'In the Quran over 1400 years ago (surah: verses 23:12-14)', answer: true},
            {option: 'By Frances Maitland Balfour 1880', answer: false}
        ],
    },
    {
        question: '4. Allah mentions men and women in the Quran..',
        options: [
            {option: 'Men more than women', answer: false},
            {option: 'Women more than men', answer: false},
            {option: 'Exactly equal', answer: true}
        ],
    },
    {
        question: '5. The expansion theory was first mentioned..',
        options: [
            {option: 'By Edwin Hubble 1929', answer: false},
            {option: 'By Georges Lemaître 1920', answer: false},
            {option: 'In the Quran over 1400 years ago (surah:verse 51:47)', answer: true}
        ],
    },
    {
        question: '6. The word "Islam" means..',
        options: [
            {option: 'One who willfully submits (to God)', answer: true},
            {option: 'To strive', answer: false},
            {option: 'Followers of Prophet Muhammad (ﷺ)', answer: false}
        ],
    },
    {
        question: '7. The word "Jihad" means..',
        options: [
            {option: 'Holy war', answer: false},
            {option: 'To "struggle" or to "strive"', answer: true},
            {option: 'Martyrdom', answer: false}
        ],
    },
    {
        question: '8. Prophets is mentioned (by name) in the Quran..',
        options: [
            {option: '25', answer: true},
            {option: '33', answer: false},
            {option: '19', answer: false}
        ],
    },
    {
        question: '9. The angel who will blow the horn to signal the Day of Judgement is..',
        options: [
            {option: 'Izrafeel', answer: true},
            {option: 'Mikaeel', answer: false},
            {option: 'Jibreel', answer: false}
        ],
    },
    {
        question: '10. A muslim should love (after Allah and His Messenger ﷺ )..',
        options: [
            {option: 'His mother three times over, before his father', answer: true},
            {option: 'His father three times over, before his mother', answer: false},
            {option: 'His father and mother equally', answer: false}
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

let nextPrevious = document.getElementById('next-previous');


start.addEventListener('click',startQuiz);

/* 
 * hide quiz and result area when window is loaded and 
 * display the score-area
 */
window.onload = function startPage() {
   
    quiz.style.display ='none';
    nextPrevious.style.display ='none';
    

};


function startQuiz(){
    quizInfo.style.display = 'none';
    quiz.style.display = 'contents';
    start.style.display = 'none';
    nextPrevious.style.display ='contents';
    

    quizQuestion.innerHTML = myQuestions[0].question;
    


    

    
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
