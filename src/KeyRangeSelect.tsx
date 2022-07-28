import React from "react";
import { MIDI_NOTE_NUMBER_TO_NOTE_NAME } from "./constants";

interface IKeyRangeSelect {
  id: string;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  calculateOverlapsOtherRange: (noteNumber: number) => boolean;
}

export const KeyRangeSelect = ({
  id,
  label,
  value,
  onChange,
  calculateOverlapsOtherRange,
}: IKeyRangeSelect) => {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
      >
        {Object.keys(MIDI_NOTE_NUMBER_TO_NOTE_NAME).map((noteNumber) => {
          const noteNumberAsNumber = parseInt(noteNumber);
          if (calculateOverlapsOtherRange(noteNumberAsNumber)) {
            return null;
          }
          return (
            <option value={noteNumberAsNumber} key={`${id}-${noteNumber}`}>
              {noteNumberAsNumber +
                " | " +
                MIDI_NOTE_NUMBER_TO_NOTE_NAME[noteNumberAsNumber]}
            </option>
          );
        })}
      </select>
    </>
  );
};
