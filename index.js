// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  console.log(left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);
  console.log(right);
  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


function moveDodgerUp() {
    const upNumbers = dodger.style.top.replace("px", "");
    const up = parseInt(upNumbers, 10);
    console.log(up);
    if (up > 0 ) {
      dodger.style.top = `${up - 1}px`;
      console.log("working");
    }
  };
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
        moveDodgerUp();
    }
  });

  function moveDodgerDown() {
    const downNumbers = dodger.style.top.replace("px", "");
    const down = parseInt(downNumbers, 10);
    console.log(down);
    if (down < 380 ) {
      dodger.style.top = `${down + 1}px`;
      console.log("working");
    }
  };
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        moveDodgerDown();
    }
  });