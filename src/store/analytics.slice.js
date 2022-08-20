import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchWrapper } from "../helpers/index";

// create slice

const name = "analytics";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const analyticsActions = { ...slice.actions, ...extraActions };
export const analyticsReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    analytics: {}
  };
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/analytics`;

  return {
    getAll: getAll()
  };

  function getAll() {
    return createAsyncThunk(
      `${name}/getAll`,
      async () => await fetchWrapper.get(baseUrl)
    );
  }
}

function createExtraReducers() {
  return {
    ...getAll()
  };

  function getAll() {
    var { pending, fulfilled, rejected } = extraActions.getAll;
    return {
      [pending]: (state) => {
        state.analytics = { loading: true };
      },
      [fulfilled]: (state, action) => {
        state.analytics = action.payload;
      },
      [rejected]: (state, action) => {
        state.analytics = { error: action.error };
      }
    };
  }
}
