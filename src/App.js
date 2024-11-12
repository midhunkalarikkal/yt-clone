import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import { ToastContainer } from "react-toastify";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Body />,
    children : [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }
])

  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
