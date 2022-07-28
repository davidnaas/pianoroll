import React from "react";
import { Note, KeyType } from "./types";

interface IPianoKeyProps {
  note: Note;
  isInActiveRange: boolean;
  setActiveNote: Function;
}

function getKeyType(noteNumber: number): KeyType {
  const relativeNoteNumber = noteNumber % 12;
  switch (relativeNoteNumber) {
    case 1:
    case 3:
    case 6:
    case 8:
    case 10:
      return KeyType.BLACK;
    default:
      return KeyType.WHITE;
  }
}

export const PianoKey = ({ note, isInActiveRange, setActiveNote }: IPianoKeyProps) => {
  const [keyIsPressed, setKeyIsPressed] = React.useState(false);
  const keyType = getKeyType(note[0]);
  const previousKeyType = getKeyType(note[0] - 1);
  const opacityLevel = isInActiveRange ? (keyIsPressed ? 0.5 : 1) : 0.1;
  return (
    <div
      onMouseDown={() => {
        if (isInActiveRange) {
          setKeyIsPressed(true);
          setActiveNote(note)
        }
      }}
      onMouseUp={() => {
        setKeyIsPressed(false);
        setActiveNote(null);
      }}
      onMouseLeave={() => {
        setKeyIsPressed(false);
        setActiveNote(null);
      }}
      key={note[1]}
      style={{
        border: "1px solid",
        borderColor: `rgba(0,0,0,${opacityLevel})`,
        backgroundColor: keyType === KeyType.BLACK ? "black" : "white",
        minWidth: keyType === KeyType.BLACK ? "10px" : "20px",
        height: keyType === KeyType.BLACK ? "70px" : "90px",
        zIndex: keyType === KeyType.BLACK ? "1" : "0",
        marginLeft:
          keyType === KeyType.BLACK
            ? "-5px"
            : previousKeyType === KeyType.WHITE
            ? "-1px"
            : "-8px",
        opacity: opacityLevel,
      }}
    />
  );
};
