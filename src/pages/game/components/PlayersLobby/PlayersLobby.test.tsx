import { screen } from "@testing-library/react";
import { defaultGameStateMock } from "../../../../mock";
import { customRender } from "../../../../test";
import { PlayersLobby } from "./PlayersLobby";

describe("<PlayersLobby/>", ()=> {
    it("Display all players",  async ()=> {
        customRender(<PlayersLobby/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: defaultGameStateMock
        });
        
        
        expect(screen.queryByText(defaultGameStateMock.players[0].name)).not.toBeInTheDocument()
        expect(screen.getByText(defaultGameStateMock.players[1].name)).toBeInTheDocument();
        expect(screen.getByText(defaultGameStateMock.players[2].name)).toBeInTheDocument();
        expect(screen.getByText(defaultGameStateMock.players[3].name)).toBeInTheDocument();

    });
})