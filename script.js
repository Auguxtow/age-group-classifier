let form = document.getElementById("form");

form.addEventListener("submit", ageClassifier);

function ageClassifier(event) {
  event.preventDefault();

  let age = parseInt(document.getElementById("age").value);
  let name = document.getElementById("name").value;
  let displayName = name ?? "Guest";
  let result = "";

  if (isNaN(age)) {
    result = "Enter a valid age.";
  } else if (age < 12) {
    result = `${displayName}, your age group is: kid`
  } else if (age <= 17) {
    result = `${displayName}, your age group is: teen`
  } else if (age <= 59) {
    result = `${displayName}, your age group is: adult`
  } else {
    result = `${displayName}, your age group is: elderly`
  }

  document.getElementById("result").innerText = result;
}


