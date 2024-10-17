module.exports = {
	config: {
			name: "salut",
			version: "1.0",
			author: "aziz",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "salut") return message.reply("Salut, je suis une intelligence artificielle, que puis-je pour vous 🫶🏼❤️");
}
};
