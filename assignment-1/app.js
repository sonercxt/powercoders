//assignment 1

// Maanniippuullaattee tthhee DOM
// Create a HTML file with at least 3 elements: h1 , p and a
// Assign a new variable for each of these 3 elements.
// For the h1 variable write a loop with 2 iterations, always
// adding the number of the iteration to the content of the tag (after
// the existing content).
// For the p variable write a loop with 4 iterations, always adding
// the number of the iteration to the content of the tag (before the
// existing content).
// For the a variable write a loop with 7 iterations, always
// replacing the content of the tag with the number of the iteration.
// © 2022 Powercoders
// The Book List

let title = "POWER.CODERS";
let intro = "We Are Looking for Participants";
let webLink = "Join us";

for (let index = 1; index < 3; index++) {
    document.querySelector("h1").innerText += ` ${title} - ${index} `;
}

for (let index = 1; index < 5; index++) {
    document.querySelector("p").innerText += ` ${index} - ${intro} `;
}

let newLink = [];
for (let index = 1; index < 8; index++) {
    newLink.push(index);
}
console.log(newLink.join());
document.querySelector("a").innerText = newLink.join();

