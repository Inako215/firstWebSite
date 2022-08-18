import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bidTypes: [
    {
      id: 1,
      airline: "AA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 2,
      airline: "AA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 3,
      airline: "AA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 4,
      airline: "AA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 5,
      airline: "AA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 6,
      airline: "AS",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 7,
      airline: "AS",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 8,
      airline: "AS",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 9,
      airline: "AS",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 10,
      airline: "FA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 11,
      airline: "FA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 12,
      airline: "FA",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 13,
      airline: "UP",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
    {
      id: 14,
      airline: "UP",
      seat: "CAPTAIN",
      domicile: "ANC",
      fleet: "73G",
      status: "Current",
      numOfBidPeriods: "3",
      lastImported: `${new Date()}`,
    },
  ],
};

export const bidTypeSlice = createSlice({
  name: "bidTypes",
  initialState,
  reducers: {
    deleteBidType: (state, action) => {
      // console.log("called Delete Bidtype:" + action.payload.id),
      const filteredBidTypes = state.bidTypes.filter(
        (bidType) => bidType.id !== action.payload.id
      );

      return {
        ...state,
        bidTypes: filteredBidTypes,
      };
    },
    importBidType: (state, action) => {
      // console.log("ImportingBidtype " + action.payload.id);
      const index = state.bidTypes.findIndex(
        (bidType) => bidType.id === action.payload.id
      );

      //console.log(index);
      state.bidTypes[index] = {
        ...state.bidTypes[index],
        status: "IMPORTING",
      };
    },
    cancelImportBidType: (state, action) => {
      // console.log("Cancel Called: " + action.payload.id);
      const index = state.bidTypes.findIndex(
        (bidType) => bidType.id === action.payload.id
      );

      state.bidTypes[index] = {
        ...state.bidTypes[index],
        status: "Current",
      };
    },
  },
});

export const selectBidTypes = (state) => state.bidTypes.bidTypes;
export const { deleteBidType, importBidType, cancelImportBidType } =
  bidTypeSlice.actions;
export default bidTypeSlice.reducer;
