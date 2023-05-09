const SESSION_TIMEOUT = 60000; // 1 minute in milliseconds

let timeout;

function startTimer() {
  timeout = setTimeout(logout, SESSION_TIMEOUT);
}

function resetTimer() {
  clearTimeout(timeout);
  startTimer();
}

function logout() {
  window.location.href = "/login";
}

startTimer();

document.addEventListener("click", resetTimer);
document.addEventListener("keydown", resetTimer);
