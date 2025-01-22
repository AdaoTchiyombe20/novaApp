import { createBrowserRouter } from "react-router-dom";

//importação das páginas
import App from "../App";
import LoginStudent1 from "../Pages/Login/Rupe/Page";
import LoginStudent2 from "../Pages/Login/BI/Page";
import GetUserDataLogin from "../Pages/Login/UserData/Page";
import ErrorPage from "../Pages/ErrorPage/Page";
import Teste from "../Pages/Teste/teste";

//configuraão do router da aplicação
const router = createBrowserRouter([
    {
        path : '/',
        element: <App/>,
        errorElement: <ErrorPage/>, 
        children : [
            {path: '/teste', element: <Teste />}
        ]
    },
    {
        path : '/rupe',
        element: <LoginStudent1/>,
        errorElement: <ErrorPage/>
    },
    {
        path : '/bi',
        element: <LoginStudent2/>,
        errorElement: <ErrorPage/>
    },
    {
        path : '/login-user',
        element: <GetUserDataLogin/>,
        errorElement: <ErrorPage/>
    },
]);

//listando rotas para possíveis renderizações
const routes = [
    {path: '/', name: "Página Inicial"},
    {path: '/teste', name: "Teste"}
  ];
  
  // exportação do router da aplicação
  export { router, routes };