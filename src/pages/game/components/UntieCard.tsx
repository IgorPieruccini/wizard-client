import { useSocket } from "../../../context/socket/hooks/useSocket"
import { Card } from "./Card";

export const UntieCard = ()=> {
    const { gameState } = useSocket();

    if(!gameState?.untieCard) return null;

    return ( <Card card={gameState.untieCard}/> );
    
}