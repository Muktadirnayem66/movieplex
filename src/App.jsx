
import { useReducer, useState } from 'react';

import { movieContext } from './context';
import { themeContext } from './context';
import Page from './pages/Page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartReducer, initialState } from './reducer/CartReducer';


const App = () => {
  
  const [darkMode, setDarkMode] = useState(true)
  const [state, dispatch] = useReducer(CartReducer, initialState)
  
  
  return (
    <>
    <themeContext.Provider value={{darkMode, setDarkMode}}>
    <movieContext.Provider value={{state, dispatch}}>
        <Page/>
        <ToastContainer/>

      </movieContext.Provider>
    </themeContext.Provider>
      
    </>
  );
};

export default App;