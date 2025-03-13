import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import WatchPage from "./components/Pages/WatchPage";
import appStore, { persistor } from "./utils/appStore";
import MainContainer from "./components/Pages/MainContainer";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
