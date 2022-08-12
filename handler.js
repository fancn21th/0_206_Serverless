// module.exports.run = (event, context, callback) => {
//   callback(null, "Hello World");
// };
module.exports.run = (event) => {
  return Promise.resolve("Hello World");
};
