import { useState } from "react";
import { useConnectSocket } from "../../hooks/socket/useConnectSocket";

export const LoginPage = ()=> {
    const [nickname, setNickname] = useState("");
    const { isConnected, connect, setUsername } = useConnectSocket();

    const connectSocket = ()=> {
        setUsername(nickname);
        connect();
    }

    return (
        <div className="App">        
            {isConnected && <p>user connected</p>}
            {!isConnected && 
                (
                <div>
                    <input
                    type="text"
                    id="username"
                    placeholder='Your nickname'
                    value={nickname}
                    onChange={(ev)=> setNickname(ev.target.value)} />
                    
                    <button onClick={connectSocket} >connect socket</button>
                </div>
                )}
        </div>)
}