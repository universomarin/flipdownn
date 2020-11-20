document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow, {
    headings: ["DAYS", "HOURS", " MINUTES ", " SECONDS "],
    theme: "light",
  }).start();

});
