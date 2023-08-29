// A timer  will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
const timer1 = (alarms) => {
  if (!alarms || alarms.length === 0) {
    console.log("Usage: node timer1.js 10 3 5 15 9");
    return;
  }
  // filter out the valid numbers - number and positive
  const alarmsArr = alarms.filter(
    (alarm) => alarm > 0 && typeof Number(alarm) === "number"
  );

  for (let element of alarmsArr) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, element * 1000);
  }
};

let args = process.argv.slice(2);
timer1(args);
