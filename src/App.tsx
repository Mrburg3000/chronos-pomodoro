import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MainRouter } from "./routers";
import { Bounce, ToastContainer } from "react-toastify";
import "./styles/theme.css";
import "./styles/global.css";


export function App() {
  
  return (
    <TaskContextProvider>
      <MainRouter />
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </TaskContextProvider>
  );
}
