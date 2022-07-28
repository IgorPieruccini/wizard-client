import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { defaultSocketContext } from "../../../../context/socket/help";
import { SocketContext } from "../../../../context/socket/socketContext";
import { SocketContextType } from "../../../../context/socket/types";
import { defaultGameStateMock } from "../../../../mock";
import { PlayersLobby } from "./PlayersLobby";


const customRender = (ui: JSX.Element, value: Partial<SocketContextType>) => {
  return render(
    <SocketContext.Provider value={{...defaultSocketContext, ...value}}>{ui}</SocketContext.Provider>,
  )
}

describe("<PlayersLobby/>", ()=> {
    it("Display all cards",  async ()=> {
        customRender(<PlayersLobby/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: defaultGameStateMock
        });
        
        
        expect(screen.queryByText(defaultGameStateMock.players[0].id)).not.toBeInTheDocument()
        expect(screen.getByText(defaultGameStateMock.players[1].id)).toBeInTheDocument();
        expect(screen.getByText(defaultGameStateMock.players[2].id)).toBeInTheDocument();
        expect(screen.getByText(defaultGameStateMock.players[3].id)).toBeInTheDocument();

    });
})