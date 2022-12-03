import { createContext, useState } from "react";

export const PledgeContext = createContext();

const initialState = {
  bambooStand: 101,
  blackEditionStand: 64,
  mahoganySpecialEdition: 0,
};

export const PledgeProvider = ({ children }) => {
  const [pledges, setPledges] = useState(initialState);

  return (
    <PledgeContext.Provider value={{ pledges, setPledges }}>
      {children}
    </PledgeContext.Provider>
  );
};
