import { BrowserRouter, Route, Routes } from "react-router-dom";

import Modal from "./modals/Modal";
import { useContext } from "react";

import { GlobalContext } from "./store/GlobalContext";
import Alert from "./alerts/Alert";
import PageNotFound from "./screens/PageNotFound";
import HomeScreen from "./screens/HomeScreen";
import CreateTaskScreen from "./screens/CreateTaskScreen";

const Container = () => {
  const { isModalOpen, modalContent, isAlertOpen, alertContent, status } =
    useContext(GlobalContext);
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route basename="TrafficMaster" path="/" element={<HomeScreen />} />
            <Route path="/create-task" element={<CreateTaskScreen />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

        <Modal isOpen={isModalOpen} content={modalContent} />
        <Alert isOpen={isAlertOpen} content={alertContent} />
      </BrowserRouter>
    </div>
  );
};

export default Container;
