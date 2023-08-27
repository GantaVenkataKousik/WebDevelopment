function imageSlider(anything){
    document.querySelector('.starbucks').src=anything;   
}

function changeCircleColor(color){
    document.querySelector('.circle').style.background=color;
}

const alinks = document.querySelectorAll(".links ul li a");
console.log(alinks);
function changeStatus(event){
    
    alinks.forEach((link)=>{
        link.classList.remove("active");
    })
    event.target.classList.add("active");
}

const titleElement = document.getElementById('title');
const famousWords = ['GVK Bucks', 'famous', 'GVK coffee'];

let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isErasing = false;
function updateTitle() {
const currentWord = famousWords[currentWordIndex];
let currentCharacters;

if (isErasing) {
    currentCharacters = currentWord.slice(0, currentCharacterIndex);
    if (currentCharacterIndex === 0) {
        isErasing = false;
        currentWordIndex++;
        if (currentWordIndex >= famousWords.length) {
            currentWordIndex = 0;
        }
    }
    currentCharacterIndex--;
} else {
    currentCharacters = currentWord.slice(0, currentCharacterIndex + 1);
    if (currentCharacterIndex === currentWord.length - 1) {
        isErasing = true;
    }
    currentCharacterIndex++;
}

titleElement.innerHTML = `It's not just a Coffee <br>It's <span>${currentCharacters+'|'}</span>`;
}


setInterval(updateTitle, 300);
