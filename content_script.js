function openURL() {
  let text = document.getElementById("tweet-text-textarea").value;
  let url = generateTwitterIntentURL(text);
  localStorage.setItem("TWITTER_TIMESTAMP_UNIX", Date.now());
  window.open(url, "_blank");
}
function msToMinutes(ms) {
  return Math.floor(ms / 60000);
}
function generateTwitterIntentURL(text) {
  return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
}

let html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Tweet first before you view twitter ;)</title>
    <style>
      body {
        background-color: #f1f1f1;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #000;
      }
    </style>
  </head>
  <body>
    <h1>You'll have to tweet first before you view twitter ;)</h1>
    <p>This page is blocked by the extension.</p>
    <textarea
      id="tweet-text-textarea"
      rows="4"
      cols="50"
      placeholder="Enter your tweet here"
      style="
        width: 600px;
        height: 200px;
        border-radius:20px;
        border-style:none;
        border-color:none;
        border-width:none;
        padding:15px;
        margin:10px;
        font-size:20px;
        letter-spacing:1px;
        font-family:Arial, Helvetica, sans-serif;
        resize: vertical;
        color:#000;
        "
    ></textarea>
    <br />
    <button
      style="
        background-color: #26a7de;
        color: white;
        border-radius: 10px;
        width: 100px;
        height: 30px;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 0px;
        border-style: none;
        cursor: pointer;
      "
      id="tweet-button"
    >
      Tweet
    </button>
  </body>
</html>
`;

// check if TWITTER_TIMESTAMP_UNIX is set
if (localStorage.getItem("TWITTER_TIMESTAMP_UNIX") !== null) {
  if (
    Date.now() - localStorage.getItem("TWITTER_TIMESTAMP_UNIX") >
    15 * 60 * 1000
  ) {
    // display block.html file on the page
    document.write(html);
    document.getElementById("tweet-button").addEventListener("click", openURL);
  }
} else {
  // set the timestamp
  localStorage.setItem("TWITTER_TIMESTAMP_UNIX", Date.now());
}

// function canAccess() {
//   // cannot access if
//   if (localStorage.getItem("TWITTER_TIMESTAMP_UNIX") == null) {
//   }
// }
