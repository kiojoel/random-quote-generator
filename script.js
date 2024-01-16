const newQuoteBtn = document.getElementById("new-quote");
const displayQuote = document.querySelector(".quote");
const author = document.querySelector(".author");
const like = document.querySelector(".fa-heart");
const share = document.querySelector(".fa-share");
const copy = document.querySelector(".fa-copy");

async function fetchRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return { content: data.content, authorSlug: data.authorSlug };
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
}

newQuoteBtn.addEventListener("click", () => {
  fetchRandomQuote()
    .then((quoteData) => {
      displayQuote.textContent = quoteData.content;
      author.textContent = quoteData.authorSlug;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });

  like.style.color = "";

  if ((copy.style.opacity = "0.5")) {
    copy.style.opacity = "1";
  }
});

like.addEventListener("click", () => {
  const currentColor = like.style.color;

  if (currentColor === "red") {
    like.style.color = "";
  } else {
    like.style.color = "red";
  }
});

copy.addEventListener("click", () => {
  copy.style.opacity = "0.5";
  navigator.clipboard.writeText(displayQuote.textContent);
});
