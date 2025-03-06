"use server";
import Email from "./Schema/Email";

const subscribe = (email: string) =>
	new Promise(async (res, rej) => {
		try {
			const duplicate = await Email.findOne({ email });

			if (duplicate) {
				rej("Email already subscribed!");
				return;
			}

			await Email.create({ email, date: new Date() });
			res(`${email} subscribed.`);
		} catch (error) {
			console.log(error);
			rej("error");
		}
	});

export default subscribe;
