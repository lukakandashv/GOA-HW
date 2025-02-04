function logSubmit(event) {
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);
  