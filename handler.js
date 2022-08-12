// module.exports.run = (event, context, callback) => {
//   callback(null, "Hello World");
// };
// module.exports.run = (event) => {
//   return Promise.resolve("Hello World");
// };
module.exports.run = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
    }),
  };
};
