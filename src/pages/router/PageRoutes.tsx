import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { useSocket } from "../../context/socket/hooks/useSocket"
import { LobbyPage } from "../lobby/LobbyPage"
import { LoginPage } from "../login/LoginPage"
import { RouteGuard } from "./RouteGaurd"

export const PAGES = {
    login: "/",
    lobby: "/lobby"
}

export const PageRouter = ()=> {
    const {isConnected} = useSocket();

    return (
        <BrowserRouter>
            <Routes>
                <Route path={PAGES.login} element={<LoginPage />} />
                <Route path={PAGES.lobby} element={
                    <RouteGuard fallbackUrl={PAGES.login}  hasPermission={()=> isConnected}>
                        <LobbyPage />
                    </RouteGuard>
                } />
            </Routes>
        </BrowserRouter>
    )
}