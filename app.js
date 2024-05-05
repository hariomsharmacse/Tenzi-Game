const boxes = document.querySelectorAll('.box');
const rollBtn = document.querySelector('#game-btn'); 

let ids = [];
let value = [];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
       box.style.backgroundColor = 'red';
       ids.push(box.getAttribute('id'));
       value.push(box.innerText);
       box.disabled = true;
       if(value.length === 10){
        if(value[0] === value[1] && value[2] === value[3] && value[4] === value[5] && value[6] === value[7] && value[8] === value[9] && value[1] === value[2] && value[3] === value[4] && value[5] === value[6] && value[7] === value[8] && value[0] === value[9]){
          console.log('You Win');
          const end = Date.now() + 15 * 100000;

// go Buckeyes!
const colors = ["#bb0000", "#ffffff"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
        }
       }
    })
})

rollBtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    if(!(ids.includes(box.id))){
      let random = Math.floor(Math.random() * 10);
            box.innerText = random;   
    }
  })
})

boxes.forEach((box) => {
  let random = Math.floor(Math.random() * 10);
          box.innerText = random; 
})



// console.log(value);

