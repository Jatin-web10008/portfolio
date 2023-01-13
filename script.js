const dynamicContant = document.getElementById("dynamic-text");
// console.log(dynamicContant);

const phrase = ["Future Software Engineer...", "Student...","Human Being..."]
let phraseIndex =0;
let letterIndex = 0;

const typingSpeed = 200;
const erasingSpeed  = 100;

function printLetters(phrase){
    if(letterIndex == phrase.length)
    {
        clearLetters();
    }
    else if(letterIndex < phrase.length)
    {
        dynamicContant.textContent += phrase.charAt(letterIndex);
        letterIndex+=1;
        setTimeout(function(){
            printLetters(phrase)
        },typingSpeed)

    }
}

function clearLetters(){
    if(letterIndex == -1)
    {
        phraseIndex = (phraseIndex + 1)% phrase.length;
        letterIndex = 0;
        printLetters(phrase[phraseIndex]);
    }
    else if(letterIndex > -1)
    {
        let upadatedPhrase = "";
        for(let index =0;index < letterIndex;index++)
        {
            upadatedPhrase += phrase[phraseIndex].charAt(index);

        }

        dynamicContant.textContent = upadatedPhrase;
        letterIndex-=1;
        setTimeout(clearLetters,erasingSpeed)

    }

}

printLetters(phrase[phraseIndex]);
window.addEventListener("scroll", function(){
    console.log(this.window.scrollY);
    let intro =  this.document.querySelector(".intro");
    if(this.window.scrollY >= (intro.offsetHeight + intro.offsetTop)){
        this.document.querySelector(".header").style.position = "sticky";
     }
     else{
        this.document.querySelector(".header").style.position = "revert";
     }
 })
