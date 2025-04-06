import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  imgPost: string;
};

interface FavouriteState {
  itemsFavourite: Post[];
}

const initialState: FavouriteState = {
  itemsFavourite: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Post>) => {
      if (!state.itemsFavourite.some((item) => item.id === action.payload.id)) {
        state.itemsFavourite.push(action.payload);
      } else {
        state.itemsFavourite = state.itemsFavourite.filter(
          (obj) => obj.id !== action.payload.id
        );
      }
    },
    clearFavourites: (state) => {
      state.itemsFavourite = [];
    },
  },
});

export const { addFavourite, clearFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
