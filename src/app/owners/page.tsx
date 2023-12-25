import { SecondaryLogoV2 } from "@/components/logo/Logo";
import "./page.css";
import { config } from "@/config/config";
import { httpClient, FetchOptions } from "@/lib/http-client";
import { OwnersOverview } from "@/types/owners";

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
            <div className="card-owner" key={owner.owner.ownerUid}>
              <div className="card-owner-header">
                <h2>{owner.owner.ownername}</h2>
              </div>
              <div className="card-owner-body">
                <div className="card-owner-title">
                  <SecondaryLogoV2 />
                </div>
                <div className="card-owner-content">
                  {owner.cabinets.map((cabinet) => {
                    return (
                      <p key={cabinet.cabinetUid}>- {cabinet.productName}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
