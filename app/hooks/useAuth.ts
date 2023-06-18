import { create } from "zustand";

interface AuthStore {
    login: boolean;
    onLogin: () => void;
    onRegister: () => void;
}

const useAuth = create<AuthStore>((set) => ({
    login: true,
    onLogin: () => set({ login: true }),
    onRegister: () => set({ login: false }),
}));

export default useAuth;
