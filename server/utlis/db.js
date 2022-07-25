const mongoose = require("mongoose");

const url = "mongodb://localhost/breadWorld";
const onlineURL =
  "mongodb+srv://PeterPan:PeterPan@codelab.eqkgv.mongodb.net/bread?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("db is now Connected");
});

module.exports = mongoose;
