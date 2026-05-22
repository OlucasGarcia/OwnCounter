import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const AuthContext =
    createContext();

export function AuthProvider({
    children,
}) {
    const [user, setUser] =
        useState(() => {
            const storage =
                localStorage.getItem(
                    "owncounter:user"
                );

            return storage
                ? JSON.parse(storage)
                : null;
        });

    useEffect(() => {
        localStorage.setItem(
            "owncounter:user",
            JSON.stringify(user)
        );
    }, [user]);

    function login(name) {
        setUser({ name });
    }

    function logout() {
        setUser(null);

        localStorage.clear();
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}