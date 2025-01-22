import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';

//importação de recursos para estilo
import "./index.css";

// importação do bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

//importando recursos para o router
import { RouterProvider } from 'react-router-dom';
import { router } from './settings/BrowserRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
