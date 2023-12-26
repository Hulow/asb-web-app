import "./page.css";
import { config } from "@/config/config";
import { httpClient } from "@/lib/http-client";
import { OwnersOverview } from "@/types/owner";
import { CardOwner } from "@/components/cards/owner/OwnerCard";
import { sanitizeOwnername } from "@/utils/utils";
import Link from "next/link";

export default async function Owners() {
  const endpoint = config.endpoints.owner.ownerOverview;
  const ownersOverview: OwnersOverview = await httpClient("get", endpoint);
  const owners = ownersOverview.owners;
  return (
    <div className="owners-container">
      <div className="owners-header">
        <h1>OWNERS </h1>
      </div>
      <div className="owner-cards">
        {owners.map((owner) => {
          const ownername = sanitizeOwnername(owner.owner.ownername, " ");
          return (
            <Link
              key={owner.owner.ownerUid}
              style={{ textDecoration: "none" }}
              href={`owners/${ownername}`}
            >
              <CardOwner
                key={owner.owner.ownerUid}
                owner={owner.owner}
                cabinets={owner.cabinets}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
