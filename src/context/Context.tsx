"use client"
import React, { createContext, useState, useEffect, type ReactNode } from "react";
import type { ContextType } from "../types/Context";

export const Context = createContext<ContextType>({
    showCategory: false,
    setShowCategory: () => null,
    token: "",
    setToken: () => null
})

export const GlobalContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const data = localStorage.getItem("token")
        if (data) setToken(data)
    }, [])

    useEffect(() => {
        if (token !== null) {
            localStorage.setItem("token", token)
        }
    }, [token])

    return <Context.Provider value={{ showCategory, setShowCategory, setToken, token }}>{children}</Context.Provider>
}