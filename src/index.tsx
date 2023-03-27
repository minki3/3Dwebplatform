import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./store/store";
import "./fontAwesome";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </Provider>
);
