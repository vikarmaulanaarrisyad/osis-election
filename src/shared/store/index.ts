import { configureStore } from '@reduxjs/toolkit';

// Import slices here as they are created
// import authReducer from '@/features/auth/store/authSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    _dummy: () => ({}) // Dummy reducer to prevent "Store does not have a valid reducer" error
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
