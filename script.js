let currentQuestion = 0;
    let questions = [
      {prompt: "1. What is your name?"},
      {prompt: "2. What is your favorite color?"},
      {prompt: "3. What is your favorite hobby?"},
    ];
    
    function startQuiz() {
      document.getElementById("startPage").style.display = "none";
      document.getElementById("questionPage").style.display = "block";
      document.getElementById("question").innerHTML = questions[currentQuestion].prompt;
    }
    
    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        document.getElementById("question").innerHTML = questions[currentQuestion].prompt;
        document.getElementById("answer").value = "";
      } else {
        endQuiz();
      }
    }
    
    function endQuiz() {
      document.getElementById("questionPage").style.display = "none";
      document.getElementById("endPage").style.display = "block";
    }
