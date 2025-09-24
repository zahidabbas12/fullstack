function calculateBmi() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("bmidiv").innerHTML = "<p>Please enter valid weight and height!</p>";
        return;
    }

    const heightincm = height / 100;
    const bmi = weight / (heightincm * heightincm);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmidiv").innerHTML = `
        <p>Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})</p>
    `;
}
