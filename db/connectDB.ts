import mongoose from "mongoose";

const connect = async () => {
	const res = await mongoose.connect(process.env.NEXT_PUBLIC_DB_URI as string);
	return res.connection.readyState;
};

export default connect;
