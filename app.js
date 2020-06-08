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
      question: 'Who plays James "Rhodey" Rhodes in Iron Man?',
      answers: [
        'Don Cheadle',
        'Terrance Howard',
        'Anthony Mackie',
        'Nicholas Pinnock'
      ],
      correctAnswer: 'Terrance Howard'
    },
    {
      question: 'Who played Deebo in the movie Friday?',
      answers: [
        'Ice Cube',
        'Ice T',
        'Tom Lister Jr.',
        '50 cent'
      ],
      correctAnswer: 'Tom Lister Jr.'
    },
    {
      question: 'Who played Chen Lien in 2015 movie Black Hat?',
      answers: [
        'Andy On',
        'Wang Leehom',
        'Luke Hemsworth',
        'Wei Tang'
      ],
      correctAnswer: 'Wei Tang'
    },
    {
      question: 'What is the Black Panther\'s real name?',
      answers: [
        "T'Challa",
        "T'Chaka",
        'Okoye',
        "W\'Kabi"
      ],
      correctAnswer: "T'Challa"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

const IMAGE_ARRAY = ["img/titanic.jpg", "img/iron.jpg", "img/friday.jpg", "img/blackhat.jpg", "img/black-panther.jpg"];






/********** EVENT HANDLER FUNCTIONS **********/

// Start submit handler
function handlerStart(){
  $('main').on('click', '#start-form', event => {
    event.preventDefault();
    STORE.questionNumber = 0;
    STORE.score = 0;
    STORE.quizStarted = true;
    return renderQuestionScreen();
  });
}


// Question submit event handler
function handlerSubmit(){
  $('main').on('submit', '#question-form',  event => {
    event.preventDefault();
    const selectedAnswer = $("input[name='answer-name']:checked").val();
    const currentCorrectAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
    if (selectedAnswer.length < 1) {
      alert('You must choose an answer.');
    }
    else if(selectedAnswer === currentCorrectAnswer) {
      STORE.score += 1;
      console.log(`Your Score is ${STORE.score} out of 5`);
      return renderCorrectScreen();
    } else {
      return renderWrongScreen();
    }
  });
}

function handlerContinue(){
  $('main').on('submit', '#continue-form',  event => {
    event.preventDefault();
    
    if(STORE.questionNumber < STORE.questions.length-1){
      STORE.questionNumber += 1;
      return renderQuestionScreen();
    } else {
      STORE.questionNumber += 1;
      return renderResultsScreen();
    }    
  });
}

// Reset event handler
function handlerReset(){
  $('main').on('submit', '#reset-form',  event => {
    event.preventDefault();
    console.log(`handler reset working`);
    return $(renderHomeScreen);
  });
}

/********** GENERATE FUNCTION(S) **********/
function generateHomeScreen() {
  console.log('renderHomeScreen ran succesfully!');
  $('main').html(`<h1>Movie Quiz</h1><main>
  <img src="img/ironmanbg.gif" "alt="irom man clip"> 
  <section>
      <form id="start-form" class="starting">
        <button type="submit" class= "glow-on-hover" id="start">Start</button>
        </form>
  </section>
</main>`);
}



function generateQuestionScreen() {
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
           <input type="radio" id="answer1" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[0]}" required>
           <label for="answer1">${STORE.questions[STORE.questionNumber].answers[0]}</label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer2" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[1]}">
           <label for="answer2">${STORE.questions[STORE.questionNumber].answers[1]} </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer3" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[2]}">
           <label for="answer3">${STORE.questions[STORE.questionNumber].answers[2]} </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer4" name="answer-name" value="${STORE.questions[STORE.questionNumber].answers[3]}">
           <label for="answer4">${STORE.questions[STORE.questionNumber].answers[3]}</label>
           </div>
           <button type="submit" class= "glow-on-hover" id="submitbtn" required>Submit</button>   
       </form>
     </div>
   </section>
 </main>`);
}

function generateCorrectScreen() {
  console.log('renderQuestions ran succesfully!');
  $('main').html(`<h1>Movie Quiz</h1>
  <main>
  <section>
      <p>You got it right!</p>
      <img src="img/correct-screen.gif" "alt="40 year old virgin clip"> 
      <p>${`Your Score is ${STORE.score} out of ${STORE.questions.length}`}</p>
      <form id="continue-form">
        <button type="submit" class= "glow-on-hover" id="continue">Continue</button>
      </form>
  </section>
</main>`);

$('main').children().css("flex-direction", "column");
}

//a function that renders the wrong answer screen
function generateWrongScreen() {
  console.log('inside wrong screen ran succesfully!' + STORE.questionNumber);
  console.log( `${STORE.questions[STORE.questionNumber].correctAnswer}`);
  $('main').html(`<h1>Movie Quiz</h1>
  <main>
  <section>
      <h3>You got it wrong.</h3>
      <img src="img/wrong-screen2.gif" class="wrong-gif" "alt="Undercover Brother clip">
      <p>The correct answer is ${STORE.questions[STORE.questionNumber].correctAnswer}.</p>
      <p>Your Score is ${STORE.score} out of ${STORE.questions.length}</p>
      <form id="continue-form">
        <button type="submit" class= "glow-on-hover" id="continue">Continue</button>
      </form>
  </section>
</main>`);

$('main').children().css("flex-direction", "column");
$('main').children().find("p").css("text-align", "center", "font-size", "5em");
}

function generateResultsScreen() {
  // console.log('renderFinal ran succesfully!');
  $('main').html(`<h1>Movie Quiz</h1>
  <main>
  <section>
      <h3>Quiz Results</h3>
      <p>Your Score is ${STORE.score} out of ${STORE.questions.length}</p>
      <form id="reset-form">
        <button type="submit" class= "glow-on-hover" id="reset">Reset</button>
      </form>
  </section>
</main>`);

$('main').children().css("flex-direction", "column");
$('main').children().find(".glow-on-hover").css("text-align", "center")
}

/********** RENDER FUNCTION(S) **********/
function renderHomeScreen(){
  $('main').html(generateHomeScreen());
  }

function renderQuestionScreen(){
$('main').html(generateQuestionScreen());
}


function renderCorrectScreen(){
  $('main').html(generateCorrectScreen()); 
}

function renderWrongScreen(){
  $('main').html(generateWrongScreen()); 
}

function renderResultsScreen(){
  $('main').html(generateResultsScreen()); 
}


/********** CALL ALL FUNCTION(S) **********/
function handlerEverything(){
  handlerStart();
  handlerSubmit();
  handlerContinue();
  handlerReset();
  generateHomeScreen();
}

$(handlerEverything);


