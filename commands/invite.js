module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    return message.member
      .send(
        `Thanks for inviting the bot
https://discord.com/api/oauth2/authorize?client_id=770339643732131873&permissions=37088320&scope=bot
    `
      )
      .catch(console.error);
  }
};
