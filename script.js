const cowsay = require("cowsay");
require("dotenv").config();

console.log(
  cowsay.say({
    text: `${process.env.NAME}` + " " + `${process.env.CAMPUS}`,
    e: "^^",
    T: "",
  })
);
