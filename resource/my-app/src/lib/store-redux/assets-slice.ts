import { Asset } from "@/models/asset";
import { createSlice, Dispatch, PayloadAction, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getAssets } from "../model-testing/azure-function-provider";


export type AssetSliceState = {
  assets: Array<Asset>
  isPending: boolean,
  error: string | null
};
// main page navigation slicer
export const assetSlice = createSlice({
  name: 'assets',
  initialState: {assets: [] as Array<Asset>, isPending: false, error: null as string | null},
  reducers: {
    setAssets: (_state, action: PayloadAction<Array<Asset>>) => {
      return {assets: action.payload , isPending: false, error: null}
    },
    setPending: (state,action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isPending = false;
      state.assets = [];
    }
  },
});

export const { setAssets, setPending, setError } = assetSlice.actions;

export const loadAssetsIntoStore = () : ThunkAction<void, RootState, unknown, UnknownAction> => async (dispatch : Dispatch, getState) => {
  if (getState().assets.isPending) {
    return ;
  }
  dispatch(setPending(true));
  try {
    // Placeholder implementation, replace with actual logic
    const data = await getAssets();
    dispatch(setAssets(data));
  } catch (err) {
    dispatch(setError((err as Error).message));
  }
};