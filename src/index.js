import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider, Client } from "urql";

const client = new Client({
  url: "https://www.graphqlhub.com/graphql"
});

export const Root = () => (
  <Provider client={client}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
