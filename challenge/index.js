let testWord = document.querySelector(".test__word");

let arrWord = testWord.innerHTML.split("");
testWord.innerHTML ="";
arrWord.forEach(el => {
    let p = document.createElement("p")
    p.innerHTML = el;
    p.className += "test__elem";
    testWord.append(p);
})

document.addEventListener("click", e => {
    if (e.target.classList.contains("test__elem") && e.target.innerHTML === "а") {
                e.target.style.color = "red";
                testWord.lastChild.classList.toggle('block')
                testWord.lastChild.classList.add = ("test__elem:after")
    }
})