import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = applyMiddleware(thunk);

// Apply Redux DevTools Extension only in development mode
if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(middleware);
}

let store;

try {
  store = createStore(rootReducer, middleware);
} catch (error) {
  console.error("Error creating Redux store:", error);
  // Handle the error appropriately, e.g., fallback mechanism
}

export default store;
