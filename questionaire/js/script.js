const LAST_QUESTION = 5;
var selectedIndexes = [];
var questionIndex = undefined;
var selectedAnswers = [null, null, null, null, null];

const startTest = () => {
  //generate 5 random questions indexes
  selectedIndexes = [];
  let count = 0;
  while (count < 5) {
    let number = null;
    do {
      number = Math.floor(Math.random() * 10);
    } while (selectedIndexes.includes(number));
    selectedIndexes.push(number);
    count++;
  }

  //show
  questionIndex = 0;
  let questionObj = questions[selectedIndexes[questionIndex]];
  //console.log(questionObj);

  //show new question
  displayQuestion(questionObj);

  //set the question number
  document.getElementById("counter").innerHTML = questionIndex + 1;

  //disable previous button and next button
  document.getElementById("next").style.pointerEvents = "none";
  document.getElementById("next").style.color = "gray";

  document.getElementById("previous").style.pointerEvents = "none";
  document.getElementById("previous").style.color = "gray";

  //hide the intro page an show the test
  document.getElementsByClassName("welcome")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "flex";

  //don't show test result
  document.getElementById("test-result").style.display = "none";

  //hide restart button
  document.getElementById("restart").style.display = "none";

  //hide the right side
  document.getElementsByClassName("your-answers")[0].style.display = "none";
};

const resetPreviousStyles = () => {
  //reset styles added previously
  document.getElementById("div-ans-a").style.border = "none";
  document.getElementById("div-ans-b").style.border = "none";
  document.getElementById("div-ans-c").style.border = "none";
  document.getElementById("div-ans-d").style.border = "none";
};

const displaySelectedAnswer = (answer) => {
  if (answer === 0) {
    document.getElementById("div-ans-a").style.border = "2px solid blue";
  } else if (answer === 1) {
    document.getElementById("div-ans-b").style.border = "2px solid blue";
  } else if (answer === 2) {
    document.getElementById("div-ans-c").style.border = "2px solid blue";
  } else {
    document.getElementById("div-ans-d").style.border = "2px solid blue";
  }
};

const displayQuestion = (questionObj) => {
  document.getElementById("question").innerHTML = questionObj.question;
  document.getElementById("ans-a").innerHTML = questionObj.answers[0].text;
  document.getElementById("ans-b").innerHTML = questionObj.answers[1].text;
  document.getElementById("ans-c").innerHTML = questionObj.answers[2].text;
  document.getElementById("ans-d").innerHTML = questionObj.answers[3].text;

  //enable previous button if there's a previous question
  if (questionIndex > 0) {
    document.getElementById("previous").style.pointerEvents = "auto";
    document.getElementById("previous").style.color = "black";
  } else {
    document.getElementById("previous").style.pointerEvents = "none";
    document.getElementById("previous").style.color = "gray";
  }

  //enable the next button only if there's an existing answer
  if (selectedAnswers[questionIndex] !== null) {
    document.getElementById("next").style.pointerEvents = "auto";
    document.getElementById("next").style.color = "black";
  } else {
    document.getElementById("next").style.pointerEvents = "none";
    document.getElementById("next").style.color = "gray";
  }

  //next 'next question to finish' if question is the last

  if (questionIndex === LAST_QUESTION - 1) {
    document.getElementById("next").innerHTML = "Finish";
  } else {
    document.getElementById("next").innerHTML = "Next question >";
  }
};

const nextQuestion = () => {
  if (questionIndex < selectedIndexes.length - 1) {
    questionIndex++;
    let questionObj = questions[selectedIndexes[questionIndex]];
    //console.log(questionObj);

    //reset styles added previously
    resetPreviousStyles();

    //show new question
    displayQuestion(questionObj);

    if (selectedAnswers[questionIndex] !== null) {
      //previous answer exist
      //set the selected answer since user can change the answer
      let answer = selectedAnswers[questionIndex];
      displaySelectedAnswer(answer);
    }

    //set the question number
    document.getElementById("counter").innerHTML = questionIndex + 1;
  } else {
    showAllQuestionAndAnswer();
  }
};

const previousQuestion = () => {
  console.log(questionIndex);
  if (questionIndex > 0) {
    questionIndex--;

    let questionObj = questions[selectedIndexes[questionIndex]];
    //console.log(questionObj);

    resetPreviousStyles();

    //show new question
    displayQuestion(questionObj);

    //set the question number
    document.getElementById("counter").innerHTML = questionIndex + 1;

    //set the selected answer since user can change the answer
    let answer = selectedAnswers[questionIndex];
    displaySelectedAnswer(answer);
  }
};

const selectedAnswer = (ans) => {
  //reset styles added previously
  resetPreviousStyles();

  //setSelected answers
  displaySelectedAnswer(ans);

  //when answer is selected, enable the next button
  document.getElementById("next").style.pointerEvents = "auto";
  document.getElementById("next").style.color = "black";

  //user answer so we can display it at the end
  selectedAnswers[questionIndex] = ans;
  //console.log(selectedAnswers);
};

//function to show the chosen question and answer. For summary at the end of the test
const showElement = (questionObj, chosenAnswer, index) => {
  let element = "";

  switch (chosenAnswer) {
    case 0:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a" style="border: 2px solid blue">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 1:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b" style="pointer-events: none; border: 2px solid blue">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c" >
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 2:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c" style="border: 2px solid blue">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="none; margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 3:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px; border: 2px solid blue">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    default:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
  }

  return element;
};

const showAllQuestionAndAnswer = () => {
  //store the count for later comparison
  let introvertCount = 0;
  let extrovertCount = 0;
  let depressionCount = 0;
  let anxietyCount = 0;
  let bipolarCount = 0;
  let bpdCount = 0;

  

  //get the questions and selected answer in order to display the summary
  for (let i = 0; i < selectedIndexes.length; i++) {
    let questionObj = questions[selectedIndexes[i]];
    let answer = selectedAnswers[i];
    let element = showElement(questionObj, answer, i + 1);
    document.getElementById("answers").innerHTML += element;

    let cat = questionObj.answers[answer].cat;
    if (cat === "depression") {
      depressionCount++;
    } else if(cat === "anxiety"){
      anxietyCount++;
    } else if(cat === "bipolar"){
      bipolarCount++;
    } else if(cat === "bpd"){
      bpdCount++;
    }
  }


  // if (depressionCount > highestCount) {
  //   highestCount = depressionCount;
  //   highestCountName = "depressionCount";
  // }

  // if (anxietyCount > highestCount) {
  //   highestCount = anxietyCount;
  //   highestCountName = "anxietyCount";
  // }

  // if (bipolarCount > highestCount) {
  //   highestCount = bipolarCount;
  //   highestCountName = "bipolarCount";
  // }

  // if (bpdCount > highestCount) {
  //   highestCount = bpdCount;
  //   highestCountName = "bpdCount";
  // }
  showPersonalities(introvertCount, extrovertCount);

  //hide the previous and finish button and show restart button
  document.getElementById("next").style.display = "none";
  document.getElementById("previous").style.display = "none";
};

const showPersonalities = (introvert, extrovert) => {
  if (introvert > extrovert) {
    //show image

    document.getElementById("trait-title").innerText = "You have anxiety";

    //append personality traits
    let element = `<li>Being Around Lots of People Drains Your Energy</li>
    <li>You Enjoy Solitude</li>
    <li>You Have a Small Group of Close Friends</li>
    <li>
      People Often Describe You as Quiet and May Find It Difficult to
      Get to Know You
    </li>

    <li>
      Too Much Stimulation Leaves You Feeling Distracted and Unfocused
    </li>
    <li>You Are Very Self-Aware</li>
    <li>You Like to Learn by Watching</li>
    <li>You Are Drawn to Jobs That Involve Independence</li>`;
    document.getElementById("personalities").innerHTML += element;
  } else {
    //show image
    document.getElementById("trait-title").innerText = "You are an dEPRESSED - PUT CHECKLIST HERE";

    //append personality traits
    let element = `<li>You enjoy being at the center of attention.</li>
    <li>You enjoy working with groups of people.</li>
    <li>You feel isolated when you spend much time alone.</li>
    <li>
      You prefer to communicate by talking as opposed to other communication means.
    </li>

    <li>
      You tend to act first before thinking
    </li>
    <li>You like to look to others and outside sources for ideas and inspiration.</li>
    <li>You like to talk about your thoughs and feelings.</li>
    <li>You have numerous, broad interests.</li>`;
    document.getElementById("personalities").innerHTML += element;
  }

  //show test result
  document.getElementById("test-result").style.display = "flex";

  //show restart button
  document.getElementById("restart").style.display = "block";

  //show the right side
  document.getElementsByClassName("your-answers")[0].style.display = "block";
};

const restartQuestion = () => {
  window.location.reload();
};
