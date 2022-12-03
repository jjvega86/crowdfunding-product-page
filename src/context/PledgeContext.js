import { createContext, useState } from "react";

export const PledgeContext = createContext();

const initialState = {
  bambooStand: 101,
  blackEditionStand: 64,
  mahoganySpecialEdition: 0,
};

export const PledgeProvider = ({ children }) => {
  const [pledges, setPledges] = useState(initialState);
  const [backers, setBackers] = useState(5007);
  const [raised, setRaised] = useState(89000);

  return (
    <PledgeContext.Provider
      value={{ pledges, setPledges, backers, setBackers, raised, setRaised }}
    >
      {children}
    </PledgeContext.Provider>
  );
};
