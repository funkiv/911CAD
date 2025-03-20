export type Incident = IncidentPostBody & {
  id: number;
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
export type IncidentPostBody = {
  dispatchStatus: "Entering" | "Dispatched" | "Cancelled";
  dispatchType: string;
  address: string;
  incidentNotes: string;
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
