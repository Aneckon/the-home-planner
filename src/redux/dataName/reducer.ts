import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataNameProps {
  dataNameList: any;
}

const initialState = { dataNameList: [] } as unknown as DataNameProps;

const dataNameSlice = createSlice({
  name: 'dataName',
  initialState,
  reducers: {
    setDataNameItem: (state, action: PayloadAction<any>) => {
      state.dataNameList.push(action.payload);
    }
  },
});

export const { setDataNameItem } = dataNameSlice.actions;
export default dataNameSlice.reducer;
