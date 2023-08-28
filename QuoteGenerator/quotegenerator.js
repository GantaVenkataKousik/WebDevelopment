const quote_display = document.querySelector(".quote-display");
        const author = document.querySelector(".author");
        const next = document.querySelector(".next");
        const tweet = document.querySelector(".tweet");

        const api = "https://api.quotable.io/random";
        async function fetchdata(url) {
            const response = await fetch(url);
            var data = await response.json();
            quote_display.innerHTML = data.content;
            author.innerHTML = data.author;
        }
        fetchdata(api);
        next.addEventListener("click", () => {
            fetchdata(api);
        })

        if (quote_display !== "quote here....") {
            tweet.addEventListener("click", () => {
                window.open("https://twitter.com/intent/tweet?text=" + quote_display.innerHTML + "  --> " + author.innerHTML, "Tweet window", "width = 500, height = 400 ");
            });
        }
