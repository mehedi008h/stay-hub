import { create } from "zustand";

interface UpdateUserModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useUserUpdateModal = create<UpdateUserModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUserUpdateModal;
