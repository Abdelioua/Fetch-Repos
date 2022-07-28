let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let dataText = document.querySelector(".show-repo span");

btn.onclick = function () {
  if (input.value === "") {
    dataText.innerHTML = "Input field can't be Empty.";
  } else {
    dataText.innerHTML = "";
    apiData();
    input.value = "";
  }
};

function apiData() {
  fetch(`https://api.github.com/users/${input.value}/repos`)
    .then((response) => response.json())
    .then((api) =>
      api.forEach((e) => {
        let mainDiv = document.createElement("div");
        mainDiv.className = "main-box";
        let repoName = document.createTextNode(e.name);
        mainDiv.appendChild(repoName);

        let link = document.createElement("a");
        link.className = "link";
        let linktxt = document.createTextNode("Visit");
        link.setAttribute("target", "_Blank");
        link.href = `https://github.com/Abdelioua/${e.name}`;
        link.appendChild(linktxt);
        mainDiv.appendChild(link);
        let star = document.createElement("span");
        star.innerHTML = `${e.stargazers_count} Stars`;
        star.className = "star";
        mainDiv.appendChild(star);

        dataText.appendChild(mainDiv);
      })
    );
}
