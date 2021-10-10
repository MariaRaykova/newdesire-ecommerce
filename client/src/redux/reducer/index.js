import { combineReducers } from "redux";
import { prodReducer} from "./productsReducer";
import { cartReducer} from "./cartReducer";

const rootReducer = combineReducers({
  productsReducer: prodReducer, 
  cartReducer
  // alert
});

export default rootReducer;
