import "./MeasurementButton.css";

export function MeasurementButton() {
  return (
    <div className="measurement-button">
      <div className="measurement-button-title">
        <h1>MEASUREMENTS</h1>
      </div>
      <div className="measurement-button-content"></div>
      <div className="measurement-button-info">
        <h2>Currently</h2>
        <h2>7 Cabinets</h2>
      </div>
    </div>
  );
}
