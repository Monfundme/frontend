"use client";
import { ToastContainer } from "react-toastify";

const CustomToastConatainer = () => {
	return (
		<ToastContainer
			position="bottom-right"
			autoClose={3000}
			limit={1}
			hideProgressBar
			closeButton={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnHover={false}
			theme="colored"
		/>
	);
};

export default CustomToastConatainer;
