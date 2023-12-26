import "./Cabinet.css";
import { Cabinet } from "@/types/measurement";

export function Cabinet({ ...cabinet }: Cabinet) {
  return (
    <div className="cabinet-container">
      <div className="cabinet-props">
        <p>{cabinet.brandName}</p>
        <p>{cabinet.productName}</p>
        <p>{cabinet.enclosureType}</p>
        <p>{cabinet.manufacturingYear}</p>
        <p>{cabinet.dimension}</p>
        <p>{cabinet.weight}</p>
      </div>
      <div className="cabinet-description">
        <p>{cabinet.description}</p>
      </div>
    </div>
  );
}
