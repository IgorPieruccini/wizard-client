import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { GameState, MatchPhase, SocketEventTypes } from "../../../../context/socket/types"
import { defaultGameStateMock } from "../../../../mock";
import { customRender } from "../../../../test";
import { handMock } from "../PlayerHand/playerHand.mock";
import { PlayerPredictions } from "./PlayerPredictions"

const mainSocket = {
    emit: (event: SocketEventTypes, data: any) => {/** placeholder */}
}

jest.mock("../../../../context/socket/socketContext", ()=> ({
    ...jest.requireActual("../../../../context/socket/socketContext"),
    mainSocket
}));


describe("<PlayerPredictions />", ()=> {

    it("Should not render options if not player turn", ()=> {
        jest.spyOn(mainSocket, "emit");

        customRender(<PlayerPredictions />, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: defaultGameStateMock
        });
        
        expect(screen.queryByText("0")).not.toBeInTheDocument();
        expect(screen.queryByText("1")).not.toBeInTheDocument();
    });

    it("Should not render options if not on Predict Match phase", ()=> {
        jest.spyOn(mainSocket, "emit");

        customRender(<PlayerPredictions />, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: {...defaultGameStateMock, matchPhase: MatchPhase.PLAY_CARDS}
        });
        
        expect(screen.queryByText("0")).not.toBeInTheDocument();
        expect(screen.queryByText("1")).not.toBeInTheDocument();
    });

    it("Should render options accordantly with number of cards", ()=> {
        jest.spyOn(mainSocket, "emit");
        const players = [...defaultGameStateMock.players]
        
        players[1].hand = handMock;

        const gameStateMock: GameState = {
            ...defaultGameStateMock,
            players
        }

        customRender(<PlayerPredictions />, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "bv2WSrwzJNMjWZ4wAAAD", // the current player turn
            },
            gameState: gameStateMock
        });
        
        expect(screen.getByText("0")).toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("Should emit event using socket", async ()=> {
        const mainSocketSpy = jest.spyOn(mainSocket, "emit");

        customRender(<PlayerPredictions />, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "bv2WSrwzJNMjWZ4wAAAD", // the current player turn
            },
            gameState: defaultGameStateMock
        });
        
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(4);

        userEvent.click(buttons[0]);

        await waitFor(()=> mainSocketSpy.mock.calls.length === 1);
        
        expect(mainSocketSpy.mock.calls[0]).toEqual([ 'predict win', { playerId: 'bv2WSrwzJNMjWZ4wAAAD', wins: 0 } ]);

    });




})