import {create} from 'zustand';

const useApiStore = create((set) => ({
  responseData: null,
  clicked:false,
  setResponseData: (data) => set({ responseData: data }),
  setClicked: (data) => set({ clicked: data }),
}));

export default useApiStore;