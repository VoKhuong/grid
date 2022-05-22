import React, { createContext, useState } from "react";

export const NavigationContext = createContext({
  route: "grid",
  setRoute: () => {},
});

export const NavigationContextProvider = (props) => {
  const [route, setRoute] = useState("grid");

  return (
    <NavigationContext.Provider
      value={{
        route,
        setRoute,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
