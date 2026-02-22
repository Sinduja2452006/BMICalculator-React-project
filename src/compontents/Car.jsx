import React from "react";
import cars from "./cars";   // ✅ cars.js is in the same folder

function Car() {
  return (
    <div>
      <h1>Car Info</h1>
      {cars.map((car, index) => (
        <article key={index}>
          <img src={car.url} height={150} width={200} alt={car.name} />
          <p><strong>Name:</strong> {car.name}</p>
          <p><strong>Color:</strong> {car.color}</p>
        </article>
      ))}
    </div>
  );
}

export default Car;