import "./CabinetCard.css";
import { CabinetCollectionOverview } from "@/types/cabinet";
export function CabinetCard({ cabinet, drivers }: CabinetCollectionOverview) {
  return (
    <div className="cabinet-card">
      <div className="cabinet-body">
        <p>{cabinet.productName}</p>
        <p>{cabinet.enclosureType}</p>
      </div>
      <div className="drivers-body">
        {drivers.map((driver) => {
          return <p key={driver.driverUid}>{driver.productName}</p>;
        })}
      </div>
    </div>
  );
}

export interface CabinetOverview {
  cabinetUid: string;
  brandName: string;
  productName: string;
  enclosureType: string;
  createdAt: Date;
}

export interface DriverOverview {
  driverUid: string;
  brandName: string;
  productName: string;
  driverType: string;
}
