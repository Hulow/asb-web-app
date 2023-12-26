interface Config {
  asbBaseUrl: string;
  asbKeyUrl: string;
  endpoints: {
    owner: {
      ownerOverview: string;
    };
    cabinet: {
      cabinetsPerOwner: string;
    };
    measurement: {
      measurementPerCabinet: string;
    };
  };
}

export const config: Config = {
  asbBaseUrl: process.env.ASB_BASE_URL ?? "http://localhost:8000",
  asbKeyUrl: process.env.ASB_KEY_URL ?? "asb",
  endpoints: {
    owner: {
      ownerOverview: "/api/owners-overview",
    },
    cabinet: {
      cabinetsPerOwner: "/api/cabinets-per-owner/",
    },
    measurement: {
      measurementPerCabinet: "/api/measurement/",
    },
  },
};
