/* eslint-disable quotes */
// 'use strict';

/* eslint-disable strict */
// /**
//  * 
//  * Technical requirements:
//  * 
//  * Your app should include a render() function, that regenerates the view each time the store is updated. 
//  * See your course material, consult your instructor, and reference the slides for more details.
//  *
//  * NO additional HTML elements should be added to the index.html file.
//  *
//  * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
//  *
//  * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
//  * 
//  */

// /********** TEMPLATE GENERATION FUNCTIONS **********/

/* Example store structure */

const STORE = {
  questions: [
    {
      question: 'Who directed the Titanic?',
      answers: [
        'James Cameron',
        'Steven Spielberg',
        'Stanley Kubrick',
        'Michael Bay'
      ],
      correctAnswer: 'James Cameron'
    },
    {
      question: 'Who plays James Rupert "Rhodey" Rhodes in Iron Man',
      answers: [
        'Don Cheadle',
        'Terrance Howard',
        'Anthony Mackie',
        'Nicholas Pinnock'
      ],
      correctAnswer: 'Don Cheadle'
    },
    {
      question: 'Who played Deebo in the movie Friday?',
      answers: [
        'Ice Cube',
        'Ice T',
        'Tom Lister Jr.',
        '50 cent'
      ],
      correctAnswer: 'King Kong ain’t got nothin’ on me!'
    },
    {
      question: 'Who played Chen Lien in 2015 movie Black Hat?',
      answers: [
        'Andy On',
        'Wang Leehom',
        'Luke Hemsworth',
        'Tang Wei'
      ],
      correctAnswer: 'Tang Wei'
    },
    {
      question: 'What is the Black Panther\'s real name?',
      answers: [
        'T\'Challa',
        'T\'Chaka',
        'Okoye',
        'W\'Kabi'
      ],
      correctAnswer: 'T\'Challa'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

const IMAGE_ARRAY = ["img/titanic.jpg", "img/iron.jpg", "img/friday.jpg", "img/blackhat.jpg", "img/black-panther.jpg"];






/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

// Start submit handler
function handlerStart(){
  $('main').on('click', '#start-form', event => {
    event.preventDefault();
    STORE.questionNumber = 0;
    STORE.score = 0;
    STORE.quizStarted = true;
    // console.log('Game has started');
    return renderQuestionScreen();
  });
}
$(handlerStart);

// Question submit event handler
function handlerSubmit(){
  $('main').on('submit', '#question-form',  event => {
    event.preventDefault();
    console.log(`handler submit working`);

    // created a variable to represent the current answer input value
    let selectedAnswer = $("input[name='answer-name']:checked").val();

    //Test console logs (not needed)
    console.log(selectedAnswer);
    console.log(STORE.questions[STORE.questionNumber].correctAnswer);
    
    
    console.log(STORE.questionNumber);

    let currentCorrectAnswer = STORE.questions[STORE.questionNumber].answers[0];
    console.log(currentCorrectAnswer);
    console.log(selectedAnswer === currentCorrectAnswer);


    // This Conditional statement checks the answer
    if(selectedAnswer === currentCorrectAnswer) {
      STORE.score += 1;
      // STORE.questionNumber += 1;
      console.log(`Your Score is ${STORE.score} out of 5`);
      return renderCorrectScreen();
    
    } else {
      // STORE.questionNumber += 1;
      return renderWrongScreen();
    }
  });
}

$(handlerSubmit);

// Continue submit event handler
function handlerContinue(){
  $('main').on('submit', '#continue-form',  event => {
    event.preventDefault();
    console.log(`handler continue working`);
    //Adds to the question count
    
    if(STORE.questionNumber < STORE.questions.length-1){
      STORE.questionNumber += 1;
      return renderQuestionScreen();
    } else {
      STORE.questionNumber += 1;
      return renderResultsScreen();
    }    
  });
}

$(handlerContinue);

// Reset submit event handler
function handlerReset(){
  $('main').on('submit', '#reset',  event => {
    event.preventDefault();
    console.log(`handler reset working`);
    
    return renderResultsScreen();

  });
}

$(handlerReset);


/********** RENDER FUNCTION(S) **********/
function renderHomeScreen() {
  console.log('renderHomeScreen ran succesfully!');
  $('main').html(`<main>
  <section>
      <form id="start-form" class="starting">
        <button type="submit" class= "glow-on-hover" id="start">Start</button>
        </form>
  </section>
</main>`);
}

$(renderHomeScreen);


function renderQuestionScreen() {
  let currentImage = IMAGE_ARRAY[STORE.questionNumber];
console.log(currentImage);
  console.log('renderQuestions ran succesfully!');
  $('main').html(`<main>
   <section>
     <div class= "image-box">
       <img src=${currentImage} alt="movie poster">
       </div>
     <div class= "question-box">  
       <h2>Question ${STORE.questionNumber + 1} out of ${STORE.questions.length}</h2>
       <P> ${STORE.questions[STORE.questionNumber].question} </P>
       
       <form id='question-form'>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[0]}">
           <label for="answer">${STORE.questions[STORE.questionNumber].answers[0]}</label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[1]}">
           <label for="answer">${STORE.questions[STORE.questionNumber].answers[1]} </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[2]}">
           <label for="answer">${STORE.questions[STORE.questionNumber].answers[2]} </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[3]}">
           <label for="answer">${STORE.questions[STORE.questionNumber].answers[3]}</label>
           </div>
           <button type="submit" class= "glow-on-hover" id="submitbtn">Submit</button>   
       </form>
     </div>
   </section>
 </main>`);


}

function renderCorrectScreen() {
  console.log('renderQuestions ran succesfully!');
  $('main').html(`<main>
  <section>
      <p>You got it right!</p>
      <p>${`Your Score is ${STORE.score} out of ${STORE.questions.length}`}</p>
      <form id="continue-form">
        <button type="submit" class= "glow-on-hover" id="continue">Continue</button>
      </form>
  </section>
</main>`);

$('main').children().css("flex-direction", "column");
}

//a function that renders the wrong answer screen
function renderWrongScreen() {
  console.log('inside wrong screen ran succesfully!' + STORE.questionNumber);
  console.log( `${STORE.questions[STORE.questionNumber].correctAnswer}`);
  $('main').html(`<main>
  <section>
      <p>You got it wrong. The correct answer is ${STORE.questions[STORE.questionNumber].correctAnswer}</p>
      <p>Your Score is ${STORE.score} out of ${STORE.questions.length}</p>
      <form id="continue-form">
        <button type="submit" class= "glow-on-hover" id="continue">Continue</button>
      </form>
  </section>
</main>`);

$('main').children().css("flex-direction", "column");
}

function renderResultsScreen() {
  // console.log('renderFinal ran succesfully!');
  $('main').html(`<main>
  <section>
      <p>Quiz Results</p>
      <p>Your Score is ${STORE.score} out of ${STORE.questions.length}</p>
      <form id="continue-form">
        <a href="https://thinkful-ei-panda.github.io/quiz-app-mattr/" class="glow-on-hover">Reset</a>
      </form>
  </section>
</main>`);

$('main').children().css("flex-direction", "column");
$('main').children().find(".glow-on-hover").css("text-align", "center")
}



