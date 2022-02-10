import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import SidebarHome from "../components/SidebarHome";
import "../styles/sidebarModal.css";
import Navbar from "../components/Navbar";

const SidebarModal = () => {
  return (
    <>
      <Navbar />
      <SidebarHome />
      <Sidebar />
      <Modal />
    </>
  );
};

export default SidebarModal;
