import { Schema, model, models } from "mongoose";

const Email = new Schema({
	email: String,
	date: Date,
});

const email = models.Email || model("Email", Email);

export default email;
