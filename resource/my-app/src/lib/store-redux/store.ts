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

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [] as string[],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter(movie => movie !== action.payload);
    },
  },
})

const navSlice = createSlice({
  name: 'nav',
  initialState: 'home' ,
  reducers: {
    navigate: (_state, action) => {
      return action.payload;
    },
  },
})


const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
    nav: navSlice.reducer,
  },
});


export {store, songsSlice};
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie} = moviesSlice.actions;
export const {navigate} = navSlice.actions;
//console.log(store);

//const startingState = store.getState();
//console.log(JSON.stringify( startingState));
//store.dispatch({type: 'song/addSong', payload: 'Imagine'});
//const finalState = store.getState();
//console.log(JSON.stringify(finalState));