import { screen } from "@testing-library/react";
import { defaultGameStateMock } from "../../../../mock";
import { cardColors } from "../../../../shared/colors";
import { customRender } from "../../../../test";
import { PlayerHand } from "./PlayerHand";
import { handMock } from "./playerHand.mock";


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

})