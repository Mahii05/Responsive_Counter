var counter = document.querySelectorAll("#counter");
console.log(counter);

counter.forEach((val) => {
    val.innerHTML = "0";
    let finalval = val.getAttribute("finalvalue");
    console.log(finalval);
    let count = 0;
    function incrementCounter() {
        if (count < finalval) {
            count++;
            val.innerHTML = count;
             setInterval(incrementCounter, 30);
        }
    }
    incrementCounter();
});