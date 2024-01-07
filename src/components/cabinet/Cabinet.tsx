import "./Cabinet.css";
import { Cabinet } from "@/types/measurement";

export function Cabinet({ ...cabinet }: Cabinet) {
  return (
    <div className="cabinet-container">
      <div className="cabinet-props">
        <div>{cabinet.brandName}</div>
        <div>{cabinet.productName}</div>
        <div>{cabinet.enclosureType}</div>
        <div>{cabinet.manufacturingYear}</div>
        <div>{cabinet.dimension}</div>
        <div>{cabinet.weight}</div>
      </div>
      <div className="cabinet-description">
        <p>{cabinet.description}</p>
      </div>
    </div>
  );
}
