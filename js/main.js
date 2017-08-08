var  questions = [
  {
    question: "Where was Rick when the outbreak started?",
    answer: "hospital"
  },
  {
    question: "Who was Rick's best friend?",
    answer: "Shane"
  },
  {
    question: "How many biological kids does Rick have?",
    answer: "1"
  },
  {
    question: "Who's favorite weapon is the crossbow?",
    answer: "Daryl"
  },
  {
    question: "What is Negan's weapon called?",
    answer: "Lucille"
  },
  {
    question: "What was Carol's daughters name?",
    answer: "Sophia"
  },
  {
    question: "What type of hairstyle does Eugene have?",
    answer: "mullet"
  },
  {
    question: "How did Lori die?",
    answer: "giving birth"
  },
  {
    question: "Where did Rick live when outbreak began?",
    answer: "Atlanta"
  },
  {
    question: "How does Beth die?",
    answer: "shot"
  }
];

for (var i = 0; i < questions.length; i++) {
  var question=questions[i].question;
  var add=document.getElementById('question' + [i]);
  console.log(question, add);
  add.textContent=question;
}

function getInfo() {
  var correct=0;
  var incorrect=0;

  for (var i = 0; i < questions.length; i++) {
    var answer=questions[i].answer;
    var guess = document.getElementById('answer' + [i]).value;
    var ask = document.getElementById('question' + [i]);

    if(answer==guess){
      ask.className='correct';
      correct++;
    } else {
      ask.className='incorrect';
      incorrect++;
    };
  };

  document.getElementById('correct').textContent=correct;
  document.getElementById('incorrect').textContent=incorrect;
}
