const questions = [
    {
      question: "What is the capital of Belgium?",
      options: ["Brussels", "Antwerp", "Ghent", "Bruges"],
      answer: "Brussels"
    },
    {
      question: "What is the official languages of Belgium?",
      options: ["English", "French and Dutch", "German", "Dutch and German"],
      answer: "French and Dutch"
    },
    {
      question: "Which famous comic character was created in Belgium?",
      options: ["Superman", "Batman", "Tintin", "Asterix"],
      answer: "Tintin"
    },
    {
      question: "What is the name of the famous Atomium building in Brussels?",
      options: ["Eiffel Tower", "Leaning Tower of Pisa", "Atomium", "Louvre"],
      answer: "Atomium"
    },
    {
      question: "Which Belgian city is known for its diamond district?",
      options: ["Antwerp", "Brussels", "Ghent", "Bruges"],
      answer: "Antwerp"
    },
    
    {
      question: "What is the Belgian dish made of fries topped with beef stew and mayonnaise?",
      options: ["Hamburger", "Hot Dog", "Poutine", "Fries with Stoofvlees"],
      answer: "Fries with Stoofvlees"
    },
    {
     question:"Which  place did the Belgian Red Devils end up in 2018 Fifa World Cup?  ",
     options : ["3","4","2","5"],
     answer :["3"]
    }
  ];

  const totalQuestions = questions.length;
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  const scoreElement = document.getElementById("scoreValue");
  const currentQuestionNumberElement = document.getElementById("currentQuestionNumber");
  const totalQuestionsElement = document.getElementById("totalQuestions");

  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(optionButton);
    });

    nextButton.disabled = true;
    currentQuestionNumberElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = totalQuestions;
  }

  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      alert("Correct!");
      score += 10;
      scoreElement.textContent = score;
    } else {
      alert("Wrong! The correct answer is: " + currentQuestion.answer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      displayQuestion();
    } else {
      alert("Belgium trivia game finished!\nYour score: " + score);
      nextButton.disabled = true;
    }
  }

  optionsElement.addEventListener("click", () => {
    nextButton.disabled = false;
  });

  nextButton.addEventListener("click", () => {
    displayQuestion();
  });

  displayQuestion();
