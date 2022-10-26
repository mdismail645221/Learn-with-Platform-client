import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider';
import { router } from './routes/routes';

function App() {

  const {theme}= useContext(AuthContext)

  return (
    <div id={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
