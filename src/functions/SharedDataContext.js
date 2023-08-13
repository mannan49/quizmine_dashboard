import { createContext, useContext, useState } from "react";

export const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
  const [chapter, setChapter] = useState("");
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SharedDataContext.Provider
      value={{
        chapter,
        setChapter,
        filteredChapters,
        setFilteredChapters,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </SharedDataContext.Provider>
  );
};

export const useSharedData = () => {
  return useContext(SharedDataContext);
};
