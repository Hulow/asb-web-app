import { CabinetCard } from "@/components/cards/cabinet/CabinetCard";
import "./page.css";
import { config } from "@/config/config";
import { httpClient } from "@/lib/http-client";
import { CabinetsPerOwner } from "@/types/cabinet";
import Link from "next/link";

interface CabinetsPerOwnerParam {
  params: {
    ownername: string;
  };
}

export default async function CabinetsPerOwner({
  params,
}: CabinetsPerOwnerParam) {
  const endpoint = config.endpoints.cabinet.cabinetsPerOwner + params.ownername;
  const cabinetsPerOwner: CabinetsPerOwner = await httpClient("get", endpoint);
  return (
    <div className="owner-container">
      <div className="owner-header">
        <h1>{cabinetsPerOwner.owner.ownername}</h1>
        <p>{cabinetsPerOwner.owner.description}</p>
      </div>
      <div className="cabinets-per-owner-cards">
        {cabinetsPerOwner.cabinets.map((cabinet) => {
          return (
            <Link
              key={cabinet.cabinet.cabinetUid}
              style={{ textDecoration: "none" }}
              href={`/owners/${cabinetsPerOwner.owner.ownername}/${cabinet.cabinet.cabinetUid}`}
            >
              <CabinetCard
                cabinet={cabinet.cabinet}
                drivers={cabinet.drivers}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
