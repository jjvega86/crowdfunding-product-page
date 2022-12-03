import { createContext, useState } from "react";

export const PledgeContext = createContext();

const initialState = {
  bambooStandQty: 101,
  blackEditionStandQty: 64,
  mahoganySpecialEditionQty: 0,
};

export const PledgeProvider = ({ children }) => {
  const [pledges, setPledges] = useState(initialState);

  return (
    <PledgeContext.Provider value={{ pledges, setPledges }}>
      {children}
    </PledgeContext.Provider>
  );
};
