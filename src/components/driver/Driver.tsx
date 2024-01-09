import "./Driver.css";
import { Driver } from "@/types/measurement";

export function Driver({ ...driver }: Driver) {
  return (
    <div className="driver-content">
      <p>{driver.brandName}</p>
      <p>{driver.continuousPowerHandling}</p>
      <p>{driver.driverType}</p>
      <p>{driver.manufacturingYear}</p>
      <p>{driver.nominalDiameter}</p>
      <p>{driver.nominalImpedance}</p>
      <p>{driver.productName}</p>
    </div>
  );
}
