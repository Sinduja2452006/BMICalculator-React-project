import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMICalculator() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const calculateBMI = () => {
    if (!name || !height || !weight) {
      alert("Please enter all fields");
      return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(2);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Healthy";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    navigate("/result", { state: { name, bmi, status } });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>BMI Calculator</h1>

        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Height (cm)" onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="Weight (kg)" onChange={(e) => setWeight(e.target.value)} />

        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
    </div>
  );
}

export default BMICalculator;