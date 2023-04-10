const quizData = [
  {
    question: "What is string interpolation?",
    a: "String interpolation is a process where strings are encrypted to make them unreadable.",
    b: "String interpolation is a process of converting strings to numerical data.",
    c: "String interpolation is a process of adding spaces between each character in a string.",
    d: "String interpolation is a process in which an expression is inserted or placed in the string.",
    correct: "d",
  },
  {
    question: "What is arrow function?",
    a: "An arrow function is a function that uses a special syntax to define parameters in JavaScript.",
    b: "An arrow function is a function that always returns undefined in JavaScript.",
    c: "An arrow function is a shorthand syntax for writing function expressions in JavaScript that allows the creation of functions with a more concise syntax",
    d: "An arrow function is a type of function that can only be used within classes in JavaScript.",
    correct: "c",
  },
  {
    question: "Difference between null and undefined?",
    a: "null is an explicitly assigned value that represents no value or no object, whereas undefined means a variable has been declared but has not been assigned a value or does not exist.",
    b: "undefined is a value that can be assigned to a variable, whereas null cannot.",
    c: "null is the same as undefined.",
    d: "null is a value that represents an empty object, whereas undefined is a value that represents an uninitialized variable.",
    correct: "a",
  },
  {
    question: "Difference between map and set?",
    a: "map is used to create a new array by applying a function to each element of an existing array, whereas set is used to create a collection of unique values.",
    b: "map is a built-in JavaScript object that allows you to store key-value pairs where keys can be of any type, whereas set is also a built-in JavaScript object that allows you to store unique values of any type, without any duplication.",
    c: "map is an object that allows you to store key-value pairs, whereas set is an array-like object that stores unique values.",
    d: "map is used to create a new array from an existing array, whereas set is used to store key-value pairs.",
    correct: "b",
  },
  {
    question: "Which access modifiers we have in JavaScript?",
    a: "public and private",
    b: "readonly and static",
    c: "JavaScript does not have built-in access modifiers",
    d: "internal and protected.",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deSelect();
  const currentQuizData = quizData[currentQuiz];
  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deSelect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function selected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = selected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick='location.reload()'>Reload</button>`;
    }
  }
});
