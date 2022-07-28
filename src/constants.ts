import { KeyRange, MidiNoteNumberToNoteNameMap } from "./types";

/*
  Generates all 128 possible midi notes and their note name equivalent
  (including the relevant octave number)
*/
function generateMidiNoteNumberToNoteNameMap(): MidiNoteNumberToNoteNameMap {
  const basicMidiNoteNumberToNoteNameMap: MidiNoteNumberToNoteNameMap = {
    0: "C",
    1: "C#/Db",
    2: "D",
    3: "D#/Eb",
    4: "E",
    5: "F",
    6: "F#/Gb",
    7: "G",
    8: "G#/Ab",
    9: "A",
    10: "A#/Bb",
    11: "B",
  };
  const fullMidiNoteNumberToNoteNameMap: MidiNoteNumberToNoteNameMap = {};
  for (let index = 0; index <= 127; index++) {
    const noteNameWithoutOctave = basicMidiNoteNumberToNoteNameMap[index % 12];
    const octave = Math.floor(index / 12);
    /*
      There was conflicting info on the web here but most sources mentioned
      that the lowest midi octave is equivalent to -1 (C-1, C#-1 etc.)
    */
    const noteNameWithOctave = noteNameWithoutOctave + (octave - 1);
    fullMidiNoteNumberToNoteNameMap[index] = noteNameWithOctave;
  }
  return fullMidiNoteNumberToNoteNameMap;
}

export const MIDI_NOTE_NUMBER_TO_NOTE_NAME: MidiNoteNumberToNoteNameMap =
  generateMidiNoteNumberToNoteNameMap();

export const DEFAULT_KEY_RANGE: KeyRange = [24, 48];
