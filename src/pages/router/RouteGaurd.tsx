import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

interface RouteGuardProps {
    children: React.ReactNode,
    fallbackUrl: string,
    hasPermission: ()=> boolean
}

/**
 * 
 * @param fallback which url it will be navigated to in case the user does not have permission
 * @param permission function returning a boolean that decided the user permission
 * @returns The router or the fallback router if user does not have permission
 */
export const RouteGuard = ({children, hasPermission, fallbackUrl}: RouteGuardProps)=> {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const allowed = hasPermission();
        if (allowed) {
            setLoading(false);
        } else {
            navigate(fallbackUrl);
        }
    }, [fallbackUrl, navigate, hasPermission])

    if (loading) return <div>checking permission</div>

    return <React.Fragment>{children}</React.Fragment>
}