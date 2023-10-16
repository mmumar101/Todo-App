// import { createContext, useContext, useState } from "react";

// const themeContext = createContext();

// export const contextTheme = ({children}) => {
//     const [darkTheme, setDarkTheme] = useState(false);



// function themeHandler() {
//     setDarkTheme((prev) => !prev);
// }

//   return (
//     <themeContext.provider value={{darkTheme, themeHandler}}>
//         {children}
//     </themeContext.provider>
//   );
// };

// export const GetThemeValue = () => useContext(themeContext);
// bg-[#4d53c5]