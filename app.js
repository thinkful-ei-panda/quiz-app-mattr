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
      question: 'Who plays Obediah Stane in Iron Man',
      answers: [
        'Jeff Bridges',
        'Jeff Goldblum',
        'Jeff Daniels',
        'Robert Downey Jr.'
      ],
      correctAnswer: 'Jeff Bridges'
    },
    {
      question: 'Which NBA player is NOT in Space Jam',
      answer: [
        'Scotty Pippen',
        'Charles Pippen',
        'Muggsy Bogues',
        'Michael Jordan'
      ],
      correctAnswer: 'Scotty Pippen'
    },
    {
      question: 'What was the tagline for Training Day',
      answers: [
        'King Kong ain’t got nothin’ on me!',
        'Life is in their hands -- Death is on their minds.',
        'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
        'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
        'The Happiest Sound in All the World'
      ],
      correctAnswer: 'King Kong ain’t got nothin’ on me!'
    },
    {
      question: 'What was the name of the computer in 2001: A Space Odyssey',
      answers: [
        'Hal 9000',
        'Hal 8000',
        'Hal 6000',
        'Commodore 64'
      ],
      correctAnswer: 'Hal 9000'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

// Start Quiz button handler should call questions page render
function handlerStart(){
  $('main').on('click', '#start-form', event => {
    event.preventDefault();
    STORE.quizStarted = true;
    console.log('Game has started');
    STORE.questionNumber = 1;
    return renderQuestionScreen();
  });
}


$(handlerStart);



function handlerSubmit(){
  $('main').on('submit', '#question-form',  event => {
    event.preventDefault();
    console.log(`handler submit working`);

    // created a variable to represent the current answer input value
    let selectedAnswer = $("input[name='answer-name']:checked").val();

    //Test console logs (not needed)
    console.log(selectedAnswer);
    console.log(STORE.questions[STORE.questionNumber-1].correctAnswer);
    
    //Adds to the question count
    STORE.questionNumber += 1;
    console.log(STORE.questionNumber);


    // This Conditional statement checks the answer
    if(selectedAnswer === STORE.questions[STORE.questionNumber-1].answers[0]) {
      STORE.score += 1;
      console.log(`Your Score is ${STORE.score} out of 5`);
      return renderCorrectScreen();
    
    } else {
      return renderWrongScreen();
    }
  });
}

$(handlerSubmit);


function handlerContinue(){
  $('main').on('submit', '#continue-form',  event => {
    event.preventDefault();
    console.log(`handler continue working`);

    // return renderCorrectScreen();
    return renderQuestionScreen();
  });
}

$(handlerContinue);


/********** RENDER FUNCTION(S) **********/
function renderHome() {
  console.log('renderHome ran succesfully!');
  $('main').html(`<main>
  <section>
      <form id="start-form" class="starting">
        <button type="submit" class= "glow-on-hover" id="start">Start</button>
        </form>
  </section>
</main>`);
}

$(renderHome)


function renderQuestionScreen() {
  console.log('renderQuestions ran succesfully!');
  $('main').html(`<main>
   <section>
     <div class= "image-box">
       <img src="img/titanic.jpg" alt="ALT" width="WIDTH" height="HIEGHT">
       </div>
     <div class= "question-box">  
       <h2>Question ${STORE.questionNumber}of 5</h2>
       <P> ${STORE.questions[STORE.questionNumber -1].question} </P>
       
       <form id='question-form'>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber -1].answers[0]}">
           <label for="answer">${STORE.questions[STORE.questionNumber -1].answers[0]}</label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber -1].answers[1]}">
           <label for="answer">${STORE.questions[STORE.questionNumber -1].answers[1]} </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber-1].answers[2]}">
           <label for="answer">${STORE.questions[STORE.questionNumber -1].answers[2]} </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="${STORE.questions[STORE.questionNumber-1].answers[3]}">
           <label for="answer">${STORE.questions[STORE.questionNumber -1].answers[3]}</label>
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
      <form id="continue-form">
        <button type="submit" class= "glow-on-hover" id="continue">Continue</button>
      </form>
  </section>
</main>`);
}

//a function that renders the wrong answer screen
function renderWrongScreen() {
  console.log('renderQuestions ran succesfully!');
  $('main').html(`<main>
  <section>
      <p>You got it wrong.</p>
      <form id="continue-form">
        <button type="submit" class= "glow-on-hover" id="continue">Continue</button>
      </form>
  </section>
</main>`);
}

