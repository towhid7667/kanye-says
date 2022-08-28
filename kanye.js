const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = quote => {
    const blockQuote = document.getElementById('qoutes-here');
    blockQuote.innerText = quote.quote;
}