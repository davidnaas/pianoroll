import React from "react";
import "./App.css";
import { PianoKeyboard } from "./PianoKeyboard";
import { KeyRangeSelect } from "./KeyRangeSelect";
import { Note, KeyRange } from "./types";
import { DEFAULT_KEY_RANGE } from "./constants";

function App() {
  const [activeNote, setActiveNote] = React.useState<Note | null>(null);
  const [keyRange, setKeyRange] = React.useState<KeyRange>(DEFAULT_KEY_RANGE);
  return (
    <div className="App">
      <PianoKeyboard keyRange={keyRange} setActiveNote={setActiveNote} />
      <div>
        Active note: {activeNote ? `${activeNote[0]} | ${activeNote[1]}` : ""}
      </div>
      <div>
        <h3>Key range</h3>
        <div>
          <KeyRangeSelect
            id="low-range"
            label="Low"
            value={keyRange[0]}
            onChange={(e) => {
              setKeyRange([parseInt(e.target.value), keyRange[1]]);
            }}
            calculateOverlapsOtherRange={(noteNumber: number) =>
              noteNumber >= keyRange[1]
            }
          />
          <KeyRangeSelect
            id="high-range"
            label="High"
            value={keyRange[1]}
            onChange={(e) => {
              setKeyRange([keyRange[0], parseInt(e.target.value)]);
            }}
            calculateOverlapsOtherRange={(noteNumber: number) =>
              noteNumber <= keyRange[0]
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
