import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./SidebarHome";
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
