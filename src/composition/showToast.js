import { toast } from "react-toastify";

const showToast = (action, message) => {
  toast[`${action}`](`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};

export default showToast;
