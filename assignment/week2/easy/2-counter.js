// assignment link : https://github.com/100xdevs-cohort-3/assignments/blob/main/week-2/week-2-async-js/easy/1-counter.md
// same as ass 1 do not use steInterval

let counter = 0;

function logCounter(n) {
    setTimeout(() => {
        console.clear()
        console.log(n++);
        logCounter(n)
    }, 1000);
}

logCounter(counter)