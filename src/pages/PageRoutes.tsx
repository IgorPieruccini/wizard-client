import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LobbyPage } from "./lobby/LobbyPage"
import { LoginPage } from "./login/LoginPage"

export const PageRouter = ()=> {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/lobby" element={<LobbyPage />} />
            </Routes>
        </BrowserRouter>
    )
}