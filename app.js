const boxes = document.querySelectorAll('.box');
const rollBtn = document.querySelector('#game-btn'); 

let ids = [];
let value = [];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
      //  ids.push(box.getAttribute('id'));
      //  value.push(box.innerText);
      //  box.disabled = true;
      // console.log(window.getComputedStyle(box).backgroundColor)
        // if(!ids.includes(box.id)){
          if(!ids.includes(box.id)){
          ids.push(box.getAttribute('id'));
          // console.log(ids);
        value.push(box.innerText);
        // console.log(value);
        box.style.backgroundColor = 'lightgreen';
      }else{
        
         
        const indexNum = ids.indexOf(box.getAttribute('id'));
        console.log(indexNum)
        
        
        ids.splice(indexNum, 1);
        // console.log(ids);
        
        value.splice(indexNum, 1);
        // console.log(value)
        
          box.style.backgroundColor = '#f0f0f0';
        

      }
      
      
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

