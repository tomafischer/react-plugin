import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [] as string[],
  reducers: {
    addSong: (state, action : PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      return state.filter(song => song !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

console.log(store);

const startingState = store.getState();
console.log(JSON.stringify( startingState));
store.dispatch({type: 'song/addSong', payload: 'Imagine'});
const finalState = store.getState();
console.log(JSON.stringify(finalState));