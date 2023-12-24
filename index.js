PLUS_ICON = "./assets/images/icon-plus.svg";
MINUS_ICON = "./assets/images/icon-minus.svg";

function addSeparator() {
  return document.createElement("hr");
}

function createElement(element, index) {
  const logo = document.createElement("img");
  logo.src = PLUS_ICON;
  logo.className = "cursor";

  const question = document.createElement("p");
  question.innerText = element.question;
  question.className = "cursor bold-text";

  const answer = document.createElement("p");
  answer.className = "grey-text hidden";
  answer.innerText = element.answer;

  const clickable = document.createElement("div");
  clickable.className = "clickable";
  clickable.appendChild(question);
  clickable.appendChild(logo);
  clickable.addEventListener("click", function () {
    element.visible = !element.visible;
    if (element.visible) {
      answer.classList.remove("hidden");
      logo.src = MINUS_ICON;
      question.classList.add("colored-text");
    } else {
      answer.classList.add("hidden");
      logo.src = PLUS_ICON;
      question.classList.remove("colored-text");
    }
  });

  const qaContentDiv = document.createElement("div");
  qaContentDiv.className = `qa-content-${index}`;
  qaContentDiv.appendChild(clickable);
  qaContentDiv.appendChild(answer);

  return qaContentDiv;
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((element, index) => {
      document
        .getElementById("content")
        .appendChild(createElement(element, index));

      if (index + 1 !== data.length) {
        document.getElementById("content").appendChild(addSeparator());
      }
    });
  });
