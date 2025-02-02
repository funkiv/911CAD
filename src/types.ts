export type Incident = {
  id: number;
  dispatchType: string;
  dispatchStatus: "Entering" | "Dispatched" | "Cancelled";
  address: string;
  city: string;
  dispatchedUnits: number[];
  incidentNumber: number;
  statusCode: string;
  createDate: string;
  latitude: string;
  longitude: string;
  fullLocationValue: string;
  addressValue: string;
};

export type Unit = {
  id: number;
  name: string;
  unitType: string;
  stationNumber: number;
  unitStatus:
    | "In Quarters"
    | "Enroute"
    | "On Scene"
    | "Transporting"
    | "At Hospital"
    | "Available";
  inService: boolean;
  isPrimary: boolean;
};

export type MapCoordinates = {
  lat: number;
  lng: number;
};
