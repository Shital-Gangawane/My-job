import { createContext, useState, useContext, useEffect } from "react";
import { initialState } from "../utils/initialStates";


 const MembersContext =createContext();

const MembersContextProvider=({childern})=>{
  const [state, setState]=useState(initialState);
  const [token, setToken] = useState();

  const storedToken = sessionStorage.getItem("token");
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  const updateState = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const updateNestedState = (section, index, key, value) => {
    // console.log("Updating state:", section, index, key, value);
    setState((prevState) => ({
      ...prevState,
      [section]: prevState[section].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };
  // console.log(state);
  

const addNewMemberState = (section, data) => {
    setState((prevState) => ({
      ...prevState,
      [section]: [...prevState[section], { ...data }],
    }));
  };

  const removeMemberState = (section, index) => {
    setState((prevState) => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }));
  };

  // console.log(currentUser);



  return(
    <MembersContext.Provider
    value={{
        state,
        setState,
        updateState,
        updateNestedState,
        addNewMemberState,
        removeMemberState,
        token,
        setToken,
   
      }}
    >
        {childern}
    </MembersContext.Provider>
  )
};

  const useMembersContext = () => {
    return useContext(MembersContext);
  };
  
  export { MembersContextProvider, useMembersContext };
  