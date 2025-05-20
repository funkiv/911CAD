export type Incident = IncidentPostBody & {
  id: number;
  dispatchedUnits: number[];
  createDate: string;
};
export type IncidentPostBody = {
  dispatchType: string;
  dispatchStatus: "Entering" | "Dispatched" | "Cancelled";
  latitude: string;
  longitude: string;
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
};

export type MapCoordinates = {
  lat: number;
  lng: number;
};
