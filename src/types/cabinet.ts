import { DriverOverview } from "./driver";
import { OwnerDescription } from "./owner";

export interface CabinetsPerOwner {
  owner: OwnerDescription;
  cabinetsLength: number;
  cabinets: CabinetCollectionOverview[];
}

export interface CabinetCollectionOverview {
  cabinet: CabinetOverview;
  drivers: DriverOverview[];
}

export interface CabinetOverview {
  cabinetUid: string;
  brandName: string;
  productName: string;
  enclosureType: string;
  createdAt: Date;
}
