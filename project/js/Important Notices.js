const toast = document.querySelector(".toast");

const progress = document.querySelector(".progress");

let timer1, timer2;

// Display the toast and progress bar
toast.classList.add("actives");
progress.classList.add("actives");

// Set timeout for toast to disappear after 10 seconds
timer1 = setTimeout(() => {
  toast.classList.remove("actives");
  toast.classList.add("inactives");
}, 5000); // 10 seconds = 10000 milliseconds

// Set timeout for progress bar to disappear after 10 seconds and 300 milliseconds
timer2 = setTimeout(() => {
  progress.classList.remove("actives");
}, 10300); // Initial delay for progress + additional 300 milliseconds

// Function to close toast when close icon clicked
closeIcon.addEventListener("click", () => {
  toast.classList.remove("actives");
  
  progress.classList.remove("actives");

  // Clear both timeouts
  clearTimeout(timer1);
  clearTimeout(timer2);
});