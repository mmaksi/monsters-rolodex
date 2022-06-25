import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const middleWares = [logger, thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["monsters"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
