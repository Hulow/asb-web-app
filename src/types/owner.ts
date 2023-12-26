import { CabinetOverview } from "./cabinet";

export interface OwnersOverview {
  ownersLength: number;
  owners: OwnerCabinetsOverview[];
}

export interface OwnerCabinetsOverview {
  owner: OwnerOverview;
  cabinets: CabinetOverview[];
}

export interface OwnerOverview {
  ownerUid: string;
  ownername: string;
  createdAt: Date;
}

export interface OwnerDescription {
  ownername: string;
  description: string;
}
