import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth.slice";
import { usersReducer } from "./users.slice";
import { analyticsReducer } from "./analytics.slice";

export * from "./auth.slice";
export * from "./users.slice";
export * from "./analytics.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    analytics: analyticsReducer
  }
});
