import {configureStore, createSlice, Dispatch, PayloadAction, ThunkAction, UnknownAction} from '@reduxjs/toolkit';
import { ModelRoute } from '@/models/routes';
import { modelRoutes } from '@/models/routes';
import { assetSlice } from './assets-slice';
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
// redux test slice - can be removed later
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

// main page navigation slicer
const navSlice = createSlice({
  name: 'nav',
  initialState: 'home' ,
  reducers: {
    navigate: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
})
// Mode testing slicer
const navModelSlice= createSlice({
  name: 'navmodel',
  initialState: modelRoutes.home,
  reducers:{
    navModel:(_state, action: PayloadAction<ModelRoute>) =>{
      return action.payload;
    }
  }
}) 


///Thunks
// interface NavigateModelContentAction {
//   (route: string): (dispatch: Dispatch) => Promise<void>;
// }

export const navigateModelContent = (route: string) : ThunkAction<void, RootState, unknown, UnknownAction> => async (dispatch : Dispatch) => {
  type ObjectKey = keyof typeof modelRoutes;
  const dynamicKey: ObjectKey = route as ObjectKey;
  const mroute = modelRoutes[dynamicKey];
  //console.log("model content route: ",mroute);
  if (mroute) {
    dispatch(navModelSlice.actions.navModel(mroute));
  } else {
    console.log("Model Route not found: ", route);
  }
};


// overall Store configuration
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
    nav: navSlice.reducer,
    navmodel: navModelSlice.reducer,
    assets: assetSlice.reducer,
  },
});

// exports
export {store, songsSlice};
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie} = moviesSlice.actions;
export const {navigate} = navSlice.actions;
export const {navModel} = navModelSlice.actions;


// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
//console.log(store);

//const startingState = store.getState();
//console.log(JSON.stringify( startingState));
//store.dispatch({type: 'song/addSong', payload: 'Imagine'});
//const finalState = store.getState();
//console.log(JSON.stringify(finalState));