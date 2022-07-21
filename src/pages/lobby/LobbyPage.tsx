import { useSocket } from "../../context/socket/hooks/useSocket";

export const LobbyPage = ()=> {
    const { lobbyState, userReady } = useSocket();

    if(!lobbyState) return <div>loading</div>

    return <div>
        {lobbyState.users.map((user)=> 
            <div key={user.userID}>
                <p>Nickname: {user.username}</p>
                <p>Status: {user.ready? "Ready for action" : "Still thinking"}</p>
                {!user.ready && <button onClick={()=> userReady(user.userID)}>I'm ready</button>}
                <br/>
            </div>
        )}
    </div>
}