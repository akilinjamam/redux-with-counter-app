import { createStore } from "redux";
import countReducer from "../reducer/counterReducer";

const store = createStore(countReducer);

export default store;