import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./reducers/mobileMenuSlice";
import staffModalReducer from "./reducers/staffModalSlice";
import newsReducer from "./reducers/newsSlice";
import serviceReducer from "./reducers/serviceSlice";
import innerPageReducer from "./reducers/innerPageSlice";
import footerReducer from "./reducers/footerSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    staffModal: staffModalReducer,
    news: newsReducer,
    service: serviceReducer,
    innerPage: innerPageReducer,
    footer: footerReducer,
  },
});
