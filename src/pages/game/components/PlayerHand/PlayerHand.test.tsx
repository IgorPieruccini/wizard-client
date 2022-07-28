import { render, screen } from "@testing-library/react";
import React from "react";
import { defaultSocketContext } from "../../../../context/socket/help";
import { SocketContext } from "../../../../context/socket/socketContext";
import { SocketContextType } from "../../../../context/socket/types";
import { defaultGameStateMock } from "../../../../mock";
import { PlayerHand } from "./PlayerHand";
import { handMock } from "./playerHand.mock";

const customRender = (ui: JSX.Element, value: Partial<SocketContextType>) => {
  return render(
    <SocketContext.Provider value={{...defaultSocketContext, ...value}}>{ui}</SocketContext.Provider>,
  )
}


describe("<PlayerHand/>", ()=> {

    it("Display all cards", ()=> {

        const gameStateMock = defaultGameStateMock;
        gameStateMock.players[0].hand = handMock;

        customRender(<PlayerHand/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: gameStateMock
        })

        expect(screen.getByText("6")).toBeInTheDocument();
        expect(screen.getByTestId("card-yellow6")).toHaveStyle("background-color: yellow");

        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.getByTestId("card-red10")).toHaveStyle("background-color: red");

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByTestId("card-blue2")).toHaveStyle("background-color: blue");
    })

})