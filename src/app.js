/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = () => {
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

  let actionLength = action.length;
  let actionR = Math.floor(Math.random() * actionLength);

  let whatLength = what.length;
  let whatR = Math.floor(Math.random() * whatLength);

  let whenLength = when.length;
  let whenR = Math.floor(Math.random() * whenLength);

  const result = `${who[whoR]}  ${action[actionR]}  ${what[whatR]}  ${when[whenR]}`;

  console.log(result);
  let c = document.getElementById("excuse");

  c.innerText = result;

  let boton = document.getElementById("bExcusa");
  boton.addEventListener("click", _ => {
    location.reload();
  });
};
//
