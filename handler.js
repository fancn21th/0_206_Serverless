// uncomment below to run locally in old fashion way
// require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it working

const fetch = require("node-fetch");

module.exports.run = async (event, context) => {
  const body = {
    msgtype: "news",
    news: {
      articles: [
        {
          title: process.env.BOT_TITLE,
          description: process.env.BOT_DESC,
          url: process.env.BOT_ARTICLE_URL,
          picurl: process.env.BOT_PIC_URL,
        },
      ],
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
