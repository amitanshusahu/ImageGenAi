import create from 'zustand';

export const useStore = create((set) => ({
  chatInput: '',
  setChatInput: (input) => set({ chatInput: input }),
  promptHelperOptions: {
    count: 0,
    ratio: '',
    // add other options if needed
  },
  setPromptHelperOptions: (options) => set((state) => ({
    promptHelperOptions: { ...state.promptHelperOptions, ...options },
  })),
  chatBody: [],
  setChatBody: (messages) => set({ chatBody: messages }),
  addChatMessage: (message) => set((state) => ({
    chatBody: [...state.chatBody, message],
  })),
}));