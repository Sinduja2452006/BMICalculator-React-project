import { BrowserRouter, Routes, Route } from "react-router-dom";
import BMICalculator from "./component/BMICalculator";
import Result from "./component/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;