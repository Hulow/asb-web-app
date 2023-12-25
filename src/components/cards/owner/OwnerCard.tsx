import "./OwnerCard.css";
import { SecondaryLogoV2 } from "@/components/logo/Logo";
import { OwnerCabinetsOverview } from "@/types/owners";

export function CardOwner({ owner, cabinets }: OwnerCabinetsOverview) {
  return (
    <div className="card-owner" key={owner.ownerUid}>
      <div className="card-owner-title">
        <h2>{owner.ownername}</h2>
      </div>
      <div className="card-owner-body">
        <div className="card-owner-logo">
          <SecondaryLogoV2 />
        </div>
        <div className="card-owner-content">
          {cabinets.map((cabinet) => {
            return <p key={cabinet.cabinetUid}>- {cabinet.productName}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
