'use strict';
let questionsAndAnswers = [
  {
    question: 'Who directed the Titanic?',
    answer1: 'James Cameron',
    answer2: 'Stanley Kubrick',
    answer3: 'Stanley Kubrick',
    answer4: 'Michael Bay',
    correctAnswer: 'James Cameron'
  },
  {
    question: 'Who plays Obediah Stane in Iron Man?',
    answer1: 'Jeff Bridges',
    answer2: 'Jeff Goldblum',
    answer3: 'Jeff Daniels',
    answer4: 'Robert Downey Jr.',
    correctAnswer: 'Jeff Bridges'
  },
  {
    question: 'Which NBA player is NOT in Space Jam?',
    answer1: 'Scotty Pippen',
    answer2: 'Charles Barkley',
    answer3: 'Mugsy Bogues',
    answer4: 'Michael Jordan',
    correctAnswer: 'Scotty Pippen'
  },
  {
    question: 'What was the tagline for Training Day?',
    answer1: 'King Kong ain’t got nothin’ on me!',
    answer2: 'Life is in their hands -- Death is on their minds.',
    answer3: 'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
    answer4: 'On every street in every city in this country, there is a nobody who dreams of being a somebody.',
    correctAnswer: 'King Kong ain’t got nothin’ on me!'
  },
  {
    question: 'What was the name of the computer in 2001: A Space Odyssey',
    answer1: 'Hal 9000',
    answer2: 'Hal 8000',
    answer3: 'Hal 6000',
    answer4: 'Commodore 64',
    correctAnswer: 'Hal 9000'
  },
  {
    quizStarted: false,
    questionNumber: 0,
    score: 0
  }
];


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
