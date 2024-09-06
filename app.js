const boxes = document.querySelectorAll(".box");
const rollBtn = document.querySelector("#game-btn");

let ids = [];
let value = [];

function checkallSamevalues(arr) {
  return arr.every((item) => item === arr[0]);
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!ids.includes(box.id)) {
      ids.push(box.getAttribute("id"));
      console.log(ids);
      value.push(box.innerText);
      console.log(value);

      const firstValue = value[0];
      const lastValue = value[value.length - 1];

      if (firstValue === lastValue) {
        box.style.backgroundColor = "lightgreen";
      } else {
        box.style.backgroundColor = "#ff474c";
      }
    } else {
      const indexNum = ids.indexOf(box.getAttribute("id"));
      ids.splice(indexNum, 1);
      value.splice(indexNum, 1);
      box.style.backgroundColor = "#f0f0f0";
    }

    if (value.length === 10 && checkallSamevalues(value)) {
      console.log("You Win");
      boxes.forEach((box) => {
        box.disabled = true;
      });
      rollBtn.innerText = "New Game";

      rollBtn.addEventListener("click", () => {
        window.location.reload(true);
      });

      const end = Date.now() + 15 * 100000;
      // go Buckeyes!
      const colors = ["#bb0000", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 57,
          origin: { x: 0 },
          colors: colors,
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 57,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  });
});

rollBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    if (!ids.includes(box.id)) {
      let random = Math.floor(Math.random() * 10);
      box.innerText = random;
    }
  });
});

boxes.forEach((box) => {
  let random = Math.floor(Math.random() * 10);
  box.innerText = random;
});

// console.log(value);
