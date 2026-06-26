const container = document.querySelector(".container");
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");

let n = 16; // default size

function createGrid(size) {
  container.innerHTML = ""; // clear old grid

  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;

    square.addEventListener("mouseenter", () => {
      square.style.background = "#111111";
    });

    container.appendChild(square);
  }
}

// initial load
createGrid(n);

resize.addEventListener("click", () => {
  let input = Number(prompt("Enter grid size (max 100):"));

  // validation
  if (!input || input < 1 || input > 100) {
    alert("Invalid size! Using default 16.");
    input = 16;
  }

  n = input;
  createGrid(n);
});

reset.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.background = "white";
  });
});
