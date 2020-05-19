import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./../App";

const mockStore = configureMockStore([thunk]);

it("renders without crashing", () => {
  const store = mockStore({
    forecastReducer: { forecast: {}, cityName: "", filtredForcast: [] },
    infoReducer: {
      loading: true,
      status: "",
      pending: false,
    },
  });
 
  const div = document.createElement("div");
  var att = document.createAttribute("data-cityid");   
 att.value = "524901";                         
 div.setAttributeNode(att); 
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
