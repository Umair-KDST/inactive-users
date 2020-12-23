const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime(),
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};

var minutes = new Date(user.lastActivity).getMinutes();

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  const diff = new Date().getMinutes() - minutes;

  0 < diff && diff < 3
    ? inactiveFirstStage()
    : 2 < diff && diff < 4
    ? inactiveSecondStage()
    : 4 < diff && diff < 6
    ? inactiveThirdStage()
    : diff > 5
    ? (minutes += 5)
    : null;
}, 60000);
