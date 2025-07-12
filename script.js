// Cache the display element once
const display = document.getElementById("display");

function append(value) {
  // Avoid two operators in a row
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar) && "+-*/".includes(value)) return;
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Basic validation: allow only digits, operators, and dots
    if (/^[\d+\-*/.() ]+$/.test(display.value)) {
      display.value = Function(`return ${display.value}`)();
    } else {
      display.value = "Error";
    }
  } catch {
    display.value = "Error";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  // Remember choice
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Apply saved theme on load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}
