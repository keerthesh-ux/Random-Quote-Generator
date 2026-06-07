const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

async function getQuote() {
    try {
        quoteText.innerText = "Loading...";
        authorText.innerText = "";

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.innerText = `"${data.quote}"`;
        authorText.innerText = `— ${data.author}`;
    } catch (error) {
        console.error(error);
        quoteText.innerText = "Failed to load quote. Please try again.";
        authorText.innerText = "";
    }
}

// Load a quote when the page opens
getQuote();

// Generate a new quote when the button is clicked
newQuoteBtn.addEventListener("click", getQuote);