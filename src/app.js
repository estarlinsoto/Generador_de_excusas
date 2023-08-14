/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];

let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let whoLength = who.length;
let whoR = Math.floor(Math.random() * whoLength);
console.log(whoR);
console.log(who[whoR]);

let actionLength = action.length;
let actionR = Math.floor(Math.random() * actionLength);
console.log(actionR);
console.log(action[actionR]);

let whatLength = what.length;
let whatR = Math.floor(Math.random() * whatLength);
console.log(whatR);
console.log(what[whatR]);

let whenLength = when.length;
let whenR = Math.floor(Math.random() * whenLength);
console.log(whenR);
console.log(when[whenR]);

const result = `${who[whoR]}  ${action[actionR]}  ${what[whatR]}  ${when[whenR]}`;

console.log(result);
let excusa = document.getElementById("excuse");
excusa.innerHTML(result);
