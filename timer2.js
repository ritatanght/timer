// A timer will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

process.stdin.on("data", (key) => {
  // ctrl+c to exit the program
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  // beep when "b" is pressed
  if (key === "b") process.stdout.write("\x07");

  let parseKey = Number(key);
  // set the timer to the input when user inputs any number from 1 to 9
  if (parseKey >= 1 && parseKey <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write("\x07"), parseKey * 1000);
  } else if (key !== "b") {
    // provide instruction on usage
    console.log("Please input number from 1 to 9.");
  }
});
