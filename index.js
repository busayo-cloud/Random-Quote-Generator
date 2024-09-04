let buttonElement = document.getElementById("btn");
let quoteText = document.querySelector("p");
let authorText = document.querySelector("h4");
let span = document.querySelector("span");

buttonElement.addEventListener("click", getRandomQuote);

function getRandomQuote() {
  let quoteRequest = new XMLHttpRequest();
  quoteRequest.open("GET", "http://api.quotable.io/random");
  quoteRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let quoteGenerated = JSON.parse(this.responseText);
      displayQuotes(quoteGenerated);
    }
  };
  quoteRequest.send();
}

function displayQuotes(quotesToDisplay) {
  buttonElement.textContent = "Updating";
  buttonElement.disabled = true;
  let { content, author } = quotesToDisplay;
  quoteText.textContent = content;
  authorText.textContent = `~ ${author}`;
  buttonElement.textContent = `New Quote`;
  buttonElement.disabled = false;
}
getRandomQuote();
