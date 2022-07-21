import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/socket/hooks/useSocket";
import { mainSocket } from "../../context/socket/socketContext";
import { SocketEventTypes } from "../../context/socket/types";
import { PAGES } from "../router/PageRoutes";

export const LobbyPage = ()=> {
    const { lobbyState, userReady } = useSocket();
    const navigate = useNavigate()

    useEffect(()=> {
        mainSocket.on(SocketEventTypes.START_GAME, ()=> {
            console.log("START GAME");
            navigate(PAGES.game)
        });
    }, []);

    if(!lobbyState) return <div>loading</div>


    return <div>
        {lobbyState.users.map((user)=> 
            <div key={user.userID}>
                <p>Nickname: {user.username}</p>
                <p>Status: {user.ready? "Ready for action" : "Still thinking"}</p>
                {(!user.ready && user.userID === mainSocket.id) && <button onClick={()=> userReady(user.userID)}>I'm ready</button>}
                <br/>
            </div>
        )}
    </div>
}