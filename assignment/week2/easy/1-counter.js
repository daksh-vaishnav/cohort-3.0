// assignment link : https://github.com/100xdevs-cohort-3/assignments/blob/main/week-2/week-2-async-js/easy/1-counter.md

/**
 * The goal of this assignment is to build a basic counter that increments 
 * automatically over time. This serves as a practical review of the concepts 
 * we've covered in earlier lessons, particularly around using intervals in JavaScript.
 * 
 * Task:
 * - Implement a counter that starts at 0 and increments by 1 every second.
 * - The counter should update continuously without requiring any user input.
 */


let counter = 0;
setInterval(() => {
    console.clear()
    console.log(counter++);    
}, 1000);

