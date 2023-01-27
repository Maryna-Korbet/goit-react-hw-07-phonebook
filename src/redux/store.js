import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
//додаємо слайс import {назва слайса} from 'redux/назва слайса (наприклад import {clicksSlice} from './clickSlice');

const persistConfig ={
    key: 'root',
    storage,
};

const persistedReducer = persistReducer (
    persistConfig,
    //вписуємо редюсери (наприклад clickSlice.reducer)
)

export const store = configureStore({
  reducer: {
    // вписуємо clicks: persistedSliceReducer;
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);