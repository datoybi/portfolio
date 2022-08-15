import { App } from "./components/App.js";

const $app = document.querySelector("#App");

const initialState = await fetch("./data.json")
  .then((response) => response.json())
  .catch((e) => {
    console.log("fetch error : " + e);
  });

new App({ $app, initialState });

window.onload = () => {
  console.log("열리 ");
};
