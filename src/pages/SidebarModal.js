import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Home from "../components/SidebarHome";
import "../styles/sidebarModal.css";

const SidebarModal = () => {
  return (
    <>
      <Home />
      <Sidebar />
      <Modal />
    </>
  );
};

export default SidebarModal;
