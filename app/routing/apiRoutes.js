// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {});

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var match = {};
    var diffArray = [];
    for (let j = 0; j < friends.length; j++) {
      var diff = 0;
      for (let i = 0; i < newFriend.scores.length; i++) {
        diff =
          diff +
          Math.abs(
            parseInt(friends[j].scores[i]) - parseInt(newFriend.scores[i])
          );
      }
      match = { index: j, diff: diff };
      diffArray.push(match);
    }
    diffArray.sort((a, b) => {
      return a.diff - b.diff;
    });
    match = diffArray[0];
    friends.push(newFriend);

    //send the match back
    res.json(friends[match.index]);
  });
};
