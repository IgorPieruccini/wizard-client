import { GameState, MatchPhase } from "../context/socket/types";

export const defaultGameStateMock: GameState = {
  players: [
    {
      id: "JrEeKNlUwAKk4Qk0AAAB",
      name: "Mr.Json",
      points: 0,
      hand: [{ id: "green5", color: "green", value: "5" }],
    },
    {
      id: "bv2WSrwzJNMjWZ4wAAAD",
      name: "Ms.Java",
      points: 0,
      hand: [{ id: "yellow1", color: "yellow", value: "1" }],
    },
    {
      id: "2Yf0A8B6CA9ZkC7kAAAF",
      name: "MC.Python",
      points: 0,
      hand: [{ id: "red10", color: "red", value: "10" }],
    },
    {
      id: "JjTv4a8DlnyCmu2zAAAH",
      name: "Mr.C-sharp",
      points: 0,
      hand: [{ id: "green7", color: "green", value: "7" }],
    },
  ],
  deck: [
    { id: "green4", color: "green", value: "4" },
    { id: "yellowN", color: "yellow", value: "N" },
    { id: "red3", color: "red", value: "3" },
    { id: "green9", color: "green", value: "9" },
    { id: "blue9", color: "blue", value: "9" },
    { id: "green3", color: "green", value: "3" },
    { id: "blue11", color: "blue", value: "11" },
    { id: "yellow4", color: "yellow", value: "4" },
    { id: "redN", color: "red", value: "N" },
    { id: "blue2", color: "blue", value: "2" },
    { id: "red4", color: "red", value: "4" },
    { id: "red8", color: "red", value: "8" },
    { id: "yellow6", color: "yellow", value: "6" },
    { id: "redZ", color: "red", value: "Z" },
    { id: "yellowZ", color: "yellow", value: "Z" },
    { id: "yellow8", color: "yellow", value: "8" },
    { id: "yellow12", color: "yellow", value: "12" },
    { id: "blue12", color: "blue", value: "12" },
    { id: "red12", color: "red", value: "12" },
    { id: "yellow10", color: "yellow", value: "10" },
    { id: "green2", color: "green", value: "2" },
    { id: "blue3", color: "blue", value: "3" },
    { id: "red11", color: "red", value: "11" },
    { id: "yellow5", color: "yellow", value: "5" },
    { id: "blue10", color: "blue", value: "10" },
    { id: "red7", color: "red", value: "7" },
    { id: "green8", color: "green", value: "8" },
    { id: "greenZ", color: "green", value: "Z" },
    { id: "green6", color: "green", value: "6" },
    { id: "red5", color: "red", value: "5" },
    { id: "yellow7", color: "yellow", value: "7" },
    { id: "blue6", color: "blue", value: "6" },
    { id: "yellow2", color: "yellow", value: "2" },
    { id: "blue1", color: "blue", value: "1" },
    { id: "blueZ", color: "blue", value: "Z" },
    { id: "red6", color: "red", value: "6" },
    { id: "blue8", color: "blue", value: "8" },
    { id: "red2", color: "red", value: "2" },
    { id: "blue4", color: "blue", value: "4" },
    { id: "blue7", color: "blue", value: "7" },
    { id: "red1", color: "red", value: "1" },
    { id: "yellow9", color: "yellow", value: "9" },
    { id: "green1", color: "green", value: "1" },
    { id: "green12", color: "green", value: "12" },
    { id: "greenN", color: "green", value: "N" },
    { id: "red9", color: "red", value: "9" },
    { id: "green10", color: "green", value: "10" },
    { id: "green11", color: "green", value: "11" },
    { id: "blue5", color: "blue", value: "5" },
    { id: "yellow3", color: "yellow", value: "3" },
    { id: "blueN", color: "blue", value: "N" },
  ],
  maxRounds: 0,
  currentRound: 1,
  playersTurn: "bv2WSrwzJNMjWZ4wAAAD",
  cemeteryCards: [],
  untieCard: { id: "yellow11", color: "yellow", value: "11" },
  matchPhase: MatchPhase.PREDICT,
  predictedWins: [],
  tableCards: []
};
