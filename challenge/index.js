let testWord = document.querySelector(".test__word");
let alphabet = document.querySelector(".alphabet");
let letter = document.querySelector(".letter__team");
let letterImg = document.querySelector(".letter__img");

function addTestWord() {
    testWord.innerHTML = "";
    arrWords = [];
    testWords.forEach(el => {
        if (el.toLowerCase().includes(letter.innerHTML)) {
            arrWords.push(el)
        }
    });
    let arrWord = arrWords[Math.floor(Math.random() * arrWords.length)].split("");
    arrWord.forEach(el => {
        let p = document.createElement("p");
        p.innerHTML = el;
        p.className += "test__elem";
        testWord.append(p);
    })
}
addTestWord();

function addAlphabet(obj) {
    for (key in obj) {
        let p = document.createElement("p");
        p.innerHTML = key;
        p.className += "alphabet__letter";
        alphabet.append(p);
    }
}
addAlphabet(alphabetArr);

document.addEventListener("click", e => {
    if (e.target.classList.contains("test__elem") && e.target.innerHTML.toLowerCase() === letter.innerHTML) {
        e.target.style.color = "red";
        if (testWord.lastChild.classList.contains("test__caption_err")) {
            testWord.lastChild.classList.remove("test__caption_err")
        }
        testWord.lastChild.classList.add("test__caption");
    } else
        if (e.target.classList.contains("test__elem") && e.target.innerHTML !== letter.innerHTML) {
            testWord.lastChild.classList.add("test__caption_err");
            setTimeout(function () {
                testWord.lastChild.classList.remove("test__caption_err");
            }, 5000);
        }
})

document.addEventListener("click", e => {
    if (e.target.classList.contains("alphabet__letter")) {
        Array.from(alphabet.children).forEach(el => {
            if (el.classList.contains("alphabet__letter_select")) {
                el.classList.remove("alphabet__letter_select")
            }
        })
        e.target.classList.add("alphabet__letter_select");
        letter.innerHTML = alphabetArr[e.target.innerHTML];
        letterImg.setAttribute('src', `${letterImages[e.target.innerHTML]}`)
        addTestWord();
    }
})