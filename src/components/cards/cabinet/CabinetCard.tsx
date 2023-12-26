import { SecondaryLogoV2 } from "@/components/logo/Logo";
import "./CabinetCard.css";
import { CabinetCollectionOverview } from "@/types/cabinet";
export function CabinetCard({ cabinet, drivers }: CabinetCollectionOverview) {
  return (
    <div className="cabinet-card">
      <div className="cabinet-body">
        <p>{cabinet.productName}</p>
        <p>{cabinet.enclosureType}</p>
      </div>
      <div className="drivers-content">
        <div className="drivers-logo">
          <SecondaryLogoV2 />
        </div>
        <div className="drivers-body">
          {drivers.map((driver) => {
            return <p key={driver.driverUid}>{driver.productName}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
