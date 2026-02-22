import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, bmi, status } = location.state || {};

  if (!name) {
    return <h2>No Data Found</h2>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>BMI Result</h1>
        <h2>Hello, {name}</h2>
        <h3>Your BMI: {bmi}</h3>
        <h3>Status: {status}</h3>

        <button onClick={() => navigate("/")}>
          Calculate Again
        </button>
      </div>
    </div>
  );
}

export default Result;