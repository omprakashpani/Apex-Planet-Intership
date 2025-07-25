async function loadQuiz() {
  const container = document.getElementById("qc");
  container.innerHTML = "Loading...";

  const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
  const data = await res.json();
  container.innerHTML = "";

  data.results.forEach((q, i) => {
    const box = document.createElement("div");
    box.className = "question-box";

    const question = document.createElement("p");
    question.innerHTML = `${i + 1}. ${q.question}`;
    box.appendChild(question);

    const options = [...q.incorrect_answers, q.correct_answer]
      .sort(() => Math.random() - 0.5);

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.onclick = () => {
        alert(opt === q.correct_answer
          ? "correct"
          : ` wrong,correct is: ${q.correct_answer}`);
      };
      box.appendChild(btn);
    });

    container.appendChild(box);
  });
}

let imageId = 100;

function loadImage() {
  const img = document.getElementById("ic"); 
  img.src = `https://picsum.photos/id/${imageId}/800/300`;
}

function nextImage() {
  imageId++;
  loadImage();
}
window.onload = () => {
  loadQuiz();
  loadImage();
  setInterval(nextImage, 3000); 
};
