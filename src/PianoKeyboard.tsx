import React from "react";
import { MIDI_NOTE_NUMBER_TO_NOTE_NAME } from "./constants";
import { PianoKey } from "./PianoKey";
import { KeyRange } from "./types"

interface IPianoKeyboardProps {
  keyRange: KeyRange;
  setActiveNote: Function,
}

export const PianoKeyboard = ({ keyRange, setActiveNote }: IPianoKeyboardProps) => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "scroll"
      }}
    >

      {Object.keys(MIDI_NOTE_NUMBER_TO_NOTE_NAME).map((noteNumber) => {
        const noteNumberAsNumber = parseInt(noteNumber);
        return (
          <PianoKey
            key={noteNumberAsNumber}
            note={[
              noteNumberAsNumber,
              MIDI_NOTE_NUMBER_TO_NOTE_NAME[noteNumberAsNumber],
            ]}
            isInActiveRange={
              noteNumberAsNumber >= keyRange[0] &&
              noteNumberAsNumber <= keyRange[1]
            }
            setActiveNote={setActiveNote}
          />
        );
      })}
    </div>
  );
};
