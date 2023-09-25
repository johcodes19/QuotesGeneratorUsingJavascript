const quotetext= document.querySelector(".quote")
quotebtn= document.querySelector("button")
authorname= document.querySelector(".author")
sound= document.querySelector(".sound")
twitter= document.querySelector(".twitter")
copy= document.querySelector(".copy")

function randomQuote() {
    quotebtn.classList.add("loading")
    quotebtn.innerHTML ="Loading Quote"

    fetch ("https://api.quotable.io/random")
    .then(response=>response.json())
    .then(result=>{
       quotetext.innerText = result.content
       authorname.innerText = result.author
       quotebtn.innerText = "New Quote"
       quotebtn.classList.remove("loading")
    })
    .catch(err=>{
        console.error("Error", err);
    });
}

sound.addEventListener("click",()=>{
    let utterance= new SpeechSynthesisUtterance(`${quotetext.innerText} by ${authorname.innerText}`);
    speechSynthesis.speak(utterance)
})
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(quotetext.innerText)
})
twitter.addEventListener("click",()=>{
    let tweetUrl= "https://twitter.com/intent/tweet?url=${quotetext.innerText}"
    window.open(tweetUrl, "_blank")
});
quotebtn.addEventListener("click",()=>{
    randomQuote()
});