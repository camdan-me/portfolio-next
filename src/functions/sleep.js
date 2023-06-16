// simple inline sleep function
export default function sleep(ms) {
	return new Promise((resolve) => {
		return setTimeout(resolve, ms);
	});
};
