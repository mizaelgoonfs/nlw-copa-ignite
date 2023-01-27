import { createContext, ReactNode } from "react";

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}
export const AuthContext = createContext({} as AuthContextDataProps);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps){

    async function signIn(){
        console.log('Vamos logar!')
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Mizael',
                avatarUrl: 'https://github.com/mizaelgoonfs.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}