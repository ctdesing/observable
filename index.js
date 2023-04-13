console.log("Loaded JS File");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  const display = document.querySelector("#counter");
  const reset = document.querySelector("#reset");
  const increaseBtn = document.querySelector("#increase");
  increaseBtn.addEventListener("click", increaseCounter);
  reset.addEventListener("click", reserCounter);

  const counter = new Observable(0);

  function increaseCounter() {
    counter.set(counter.value() + 1);
  }

  function reserCounter() {
    counter.set(0);
  }

  counter.subscribe((val) => {
    display.textContent = val;
  });
});
