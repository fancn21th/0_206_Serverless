// uncomment below to run locally in old fashion way
// require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it working

const fetch = require("node-fetch");

module.exports.run = async (event, context) => {
  const body = {
    msgtype: "text",
    text: {
      content: process.env.BOT_MSG,
    },
  };

  const response = await fetch(process.env.BOT_URL, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  console.log(data);
};
