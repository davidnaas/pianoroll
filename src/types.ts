export enum KeyType {
  BLACK = "BLACK",
  WHITE = "WHITE",
}
export type KeyRange = [number, number];

export type Note = [number, string];

export type MidiNoteNumberToNoteNameMap = { [noteNumber: number]: string };
