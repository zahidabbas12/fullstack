function calculateGrades() {
  var sname = document.getElementById("sname").value;
  var enghmarks = parseInt(document.getElementById("enghmarks").value) || 0;
  var csmarks = parseInt(document.getElementById("csmarks").value) || 0;
  var dsamarks = parseInt(document.getElementById("dsamarks").value) || 0;
  var webdevmarks = parseInt(document.getElementById("webdevmark").value) || 0;
  var hismarks = parseInt(document.getElementById("hismarks").value) || 0;


  var totalmarks = enghmarks + csmarks + dsamarks + webdevmarks + hismarks;
  var percentage = (totalmarks / 500) * 100;

  var status = percentage >= 33 ? "Pass" : "Fail";

  var grade = "";
  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else if (percentage >= 33) {
    grade = "E";
  } else {
    grade = "F";
  }

  var resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
        <h2 class="text-lg font-semibold mb-2">Results for <span class="text-blue-600">${sname}</span></h2>
        <p><strong>Total Marks:</strong> ${totalmarks} / 500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> <span class="${
          status === "Pass" ? "text-green-600" : "text-red-600"
        }">${status}</span></p>
    `;
}
