import "./page.css";
import { config } from "@/config/config";
import { httpClient, FetchOptions } from "@/lib/http-client";
import { OwnersOverview } from "@/types/owners";
import { CardOwner } from "@/components/cards/owner/OwnerCard";

export default async function Owners() {
  const endpoint = config.endpoints.owner.ownerOverview;
  const fetchOptions: FetchOptions = {
    method: "get",
    headers: {
      Authorization: config.asbKeyUrl,
    },
  };
  const ownersOverview: OwnersOverview = await httpClient(
    endpoint,
    fetchOptions
  );
  const owners = ownersOverview.owners;
  return (
    <div className="owners-container">
      <div className="owners-header">
        <h1>OWNERS </h1>
      </div>
      <div className="cards-owner">
        {owners.map((owner) => {
          return (
            <CardOwner
              key={owner.owner.ownerUid}
              owner={owner.owner}
              cabinets={owner.cabinets}
            />
          );
        })}
      </div>
    </div>
  );
}
