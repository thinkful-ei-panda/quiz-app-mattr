'use strict';

/* eslint-disable strict */
/**
 * Example store structure
 */
// const STORE = {
//   // 5 or more questions are required
//   questions: [
//     {
//       question: 'Who directed the Titanic?',
//       answers: [
//         'James Cameron',
//         'Steven Spielberg',
//         'Stanley Kubrick',
//         'Michael Bay'
//       ],
//       correctAnswer: 'James Cameron'
//     },
//     {
//       question: 'Who plays Obediah Stane in Iron Man',
//       answers: [
//         'Jeff Bridges',
//         'Jeff Goldblum',
//         'Jeff Daniels',
//         'Robert Downey Jr.'
//       ],
//       correctAnswer: 'Jeff Bridges'
//     },
//     {
//       question: 'Which NBA player is NOT in Space Jam',
//       answer: [
//         'Scotty Pippen',
//         'Charles Pippen',
//         'Muggsy Bogues',
//         'Michael Jordan'
//       ],
//       correctAnswer: 'Scotty Pippen'
//     },
//     {
//       question: 'What was the tagline for Training Day',
//       answers: [
//         'King Kong ain’t got nothin’ on me!',
//         'Life is in their hands -- Death is on their minds.',
//         'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
//         'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
//         'The Happiest Sound in All the World'
//       ],
//       correctAnswer: 'King Kong ain’t got nothin’ on me!'
//     },
//     {
//       question: 'What was the name of the computer in 2001: A Space Odyssey',
//       answers: [
//         'Hal 9000',
//         'Hal 8000',
//         'Hal 6000',
//         'Commodore 64'
//       ],
//       correctAnswer: 'Hal 9000'
//     }
//   ],
//   quizStarted: false,
//   questionNumber: 0,
//   score: 0
// };

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

// // These functions return HTML templates

// //a function that returns the question template
// function questionTemplate() {
//   console.log('questionTemplate ran succesfully!');
// }

// //a function that returns the individual answer templates
// function answerTemplate() {
//   console.log('answerTemplate ran succesfully!');
// }

// //a function that creates the answers form 
// function answersFormTemplate() {
//   console.log('$answersFormTemplate ran successfully!');
// }

// //a function display how far through the list of questions the user is (x out of 5 questions)
// function progressTemplate() {
//   console.log('progressTemplate ran successfully!');
// }

// //a function to return the final results template
// function finalResultsTemplate() {
//   console.log('finalResultsTemplate ran succesfully!');
// }

// /********** RENDER FUNCTION(S) **********/

// // This function conditionally replaces the contents of the <main> tag based on the state of the store

// // a function that renders the welcome screen
// function renderWelcomeScreen() {
//   console.log('renderWelcomeScreen ran succesfully!');
// }

// // a function that renders the question screens
// function renderQuestionScreens() {
//   console.log('renderQuestions ran succesfully!');
// }

// // a function that renders the correct answer screen
// function renderCorrectScreen() {
//   console.log('rendomerCorrectScreen ran succesfully!');
// }

// //a function that renders the wrong answer screen
// function renderWrongScreen() {
//   console.log('renderWrongScreen ran successfully!');
// }

// // a function that renders the final results screen
// function renderFinalScreen() {
//   console.log('renderFinalScreen ran succesfully!');
// }

// /********** EVENT HANDLER FUNCTIONS **********/

// // These functions handle events (submit, click, etc)

const STORE = {
  // 5 or more questions are required
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
// Start Quiz button handler should call questions page render
function handlerStart(){

  $('#start').click(event => {
    event.preventDefault();
    console.log('anything');
    return renderQuestionScreens();
  });
}


$(handlerStart);

function handlerSubmit(){

  $('form').submit(event => {
    event.preventDefault();
    console.log('anything again');
    //  return renderQuestionScreens();
  });
}


$(handlerSubmit);


function renderQuestionScreens() {
  console.log('renderQuestions ran succesfully!');
  $('main').html(`<main>
   <section>
     <div class= "image-box">
       <img src="img/titanic.jpg" alt="ALT" width="WIDTH" height="HIEGHT">
       </div>
     <div class= "question-box">  
       <h2>Question X of 5</h2>
       <P>This is a question?</P>
       
       <form>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="answer">
           <label for="answers">Answer1</label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="answer">
           <label for="answers">Answer2 </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="answer">
           <label for="answers">Answer3 </label>
           </div>
         <div class= "input-selection">
           <input type="radio" id="answer" name="answer-name" value="answer">
           <label for="answers">Answer4 </label>
           </div>
           <button type="submit" class= "glow-on-hover" id="submitbtn">Submit</button>   
       </form>
     </div>
   </section>
 </main>`);
}

function countClicks() {
  let clickCount = 0;
  $('#submitbtn').click(function(event) {
    clickCount += 1;
  });
}

$(countClicks);
