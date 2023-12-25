import { SecondaryLogo } from "@/components/logo/Logo";
import "./MeasurementButton.css";

export function MeasurementButton() {
  return (
    <div className="measurement-button">
      <div className="measurement-button-title">
        <h1>MEASUREMENTS</h1>
      </div>
      <div className="measurement-button-content"></div>
      <div className="measurement-button-info">
        <div>
          <SecondaryLogo />
        </div>
        <h2> 7 Cabinets</h2>
      </div>
    </div>
  );
}
