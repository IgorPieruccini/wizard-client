import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MatchPhase, SocketEventTypes } from "../../../../context/socket/types";
import { defaultGameStateMock } from "../../../../mock";
import { cardColors } from "../../../../shared/colors";
import { customRender } from "../../../../test";
import { PlayerHand } from "./PlayerHand";
import { handMock } from "./playerHand.mock";

const mainSocket = {
    emit: (event: SocketEventTypes, data: any) => {/** placeholder */}
}

jest.mock("../../../../context/socket/socketContext", ()=> ({
    ...jest.requireActual("../../../../context/socket/socketContext"),
    mainSocket
}));

describe("<PlayerHand/>", ()=> {

    it("Display all cards", ()=> {

        const gameStateMock = {...defaultGameStateMock};
        gameStateMock.players[0].hand = handMock;

        customRender(<PlayerHand/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: gameStateMock
        })

        expect(screen.getByText("6")).toBeInTheDocument();
        expect(screen.getByTestId("card-yellow6")).toHaveStyle(`background-color: ${cardColors.yellow}`);

        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.getByTestId("card-red10")).toHaveStyle(`background-color: ${cardColors.red}`);

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByTestId("card-blue2")).toHaveStyle(`background-color: ${cardColors.blue}`);
    })

    it("Don't display pickable button if not player turn", ()=> {
        const gameStateMock = {
            ...defaultGameStateMock,
            matchPhase: MatchPhase.PLAY_CARDS
        };
        gameStateMock.players[0].hand = handMock;

        customRender(<PlayerHand/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "JrEeKNlUwAKk4Qk0AAAB",
            },
            gameState: gameStateMock
        })

        expect(screen.queryAllByText("Pick")).toHaveLength(0);
    });

    it("Should display pickable button if player turn", ()=> {
        const socketSpy = jest.spyOn(mainSocket, "emit");

        const gameStateMock = {
            ...defaultGameStateMock,
            matchPhase: MatchPhase.PLAY_CARDS
        };
        gameStateMock.players[1].hand = handMock;

        customRender(<PlayerHand/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "bv2WSrwzJNMjWZ4wAAAD",
            },
            gameState: gameStateMock
        })

        const pickButtons = screen.getAllByText("Pick");

        expect(pickButtons).toHaveLength(3);

        userEvent.click(pickButtons[0]);

        expect(socketSpy.mock.calls).toHaveLength(1);
        expect(socketSpy.mock.calls[0]).toEqual([
          'pick card',
          {
            id: 'yellow6',
            color: 'yellow',
            value: '6',
            playerId: 'bv2WSrwzJNMjWZ4wAAAD'
          }
        ]);

    });

    it("Should not display pickable button if player turn and MatchPhase is predictable", ()=> {
        const gameStateMock = {
            ...defaultGameStateMock
        };
        gameStateMock.players[1].hand = handMock;

        customRender(<PlayerHand/>, {
            //@ts-ignore ignore since we don't need the entire socket object for testing
            socket: {
                id: "bv2WSrwzJNMjWZ4wAAAD",
            },
            gameState: gameStateMock
        })

        expect(screen.queryAllByText("Pick")).toHaveLength(0);
    });

})