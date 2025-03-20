import { X } from "lucide-react";
import { IncidentPostBody } from "../types";
import { useState } from "react";

interface NewCallFormProps {
  emsCallTypes: string[];
  toggleNewCallDialogue: boolean;
  handleToggleNewCallDialogue: () => void;
  handleSubmitIncidentInfo: (newIncident: any) => void;
}
export default function NewCallDialogue({
  emsCallTypes,
  toggleNewCallDialogue,
  handleToggleNewCallDialogue,
  handleSubmitIncidentInfo,
}: NewCallFormProps) {
  const [newCallType, setNewType] = useState(emsCallTypes[0]);
  const [newIncidentAddress, setNewIncidentAddress] = useState("");
  const [newCallNotes, setNewCallNotes] = useState("");
  return (
    <dialog
      className=" bg-gray-800 border-2 rounded-xl border-gray-200 text-white h-full w-1/3 z-50"
      open={toggleNewCallDialogue}
    >
      <div
        onClick={handleToggleNewCallDialogue}
        className="float-right bg-gray-700 rounded-lg m-2"
      >
        <X className="m-1" />
      </div>

      <div className=""> Call Information</div>
      <form className="">
        <div className="flex items-center gap-8">
          <label htmlFor="">Call Type:</label>
          <select
            onChange={(e) => setNewType(e.target.value)}
            value={newCallType}
            className="text-black"
            name="Call Type"
          >
            {emsCallTypes.map((callType) => {
              return (
                <option key={callType} value={callType}>
                  {callType}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center gap-8">
          <label htmlFor="">Incident Address:</label>
          <input
            onChange={(e) => setNewIncidentAddress(e.target.value)}
            value={newIncidentAddress}
            className="text-black"
            type="text"
          />
        </div>
        <div className="flex items-center gap-8">
          <label htmlFor="">Call Notes:</label>
          <textarea
            onChange={(e) => setNewCallNotes(e.target.value)}
            value={newCallNotes}
            className="text-black"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const newIncident: IncidentPostBody = {
              dispatchStatus: "Entering",
              dispatchType: newCallType,
              address: newIncidentAddress,
              incidentNotes: newCallNotes,
            };
            handleSubmitIncidentInfo(newIncident);
          }}
          className="bg-red-600 w-full h-8 rounded-xl border-2 border-red-700 font-semibold text-white"
        >
          Submit Call
        </button>
      </form>
    </dialog>
  );
}
