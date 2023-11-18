import { useEffect } from "react";
import ReactDOM from "react-dom";
import React from "react";

import EventProvider from "@/contexts/event-context";

const App = () => {
  return <EventProvider>{/* <MyCalendar /> */}</EventProvider>;
};

const HomePage = () => {
  useEffect(() => {
    const rootElement = document.getElementById("app");
    if (rootElement) {
      ReactDOM.render(<App />, rootElement);
    }
  }, []);

  return null;
};

export default HomePage;
