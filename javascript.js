var qt = {
  "quotes": [
    {
      "writer": "Kevin Kruse",
      "text": "Life is about making an impact, not making an income."
    }, {
      "text": "Whatever the mind of man can conceive and believe, it can achieve",
      "writer": "Napoleon Hill"
    }, {
      "text": "Strive not to be a success, but rather to be of value.",
      "writer": "Albert Einstein"
    }, {
      "text": " Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ",
      "writer": "Robert Frost"
    }, {
      "text": " I attribute my success to this: I never gave or took any excuse.",
      "writer": "Florence Nightingale"
    }, {
      "text": "You miss 100% of the shots you don’t take.",
      "writer": "Wayne Gretzky"
    },
    {
      "text": "I have missed more than 9000 shots in my career. I have lost almost 300 games.26 times I have been trusted to take the game winning shot and missed.I have failed over and over and over again in my life. And that is why I succeed.",
      "writer": "Michael Jordan"
    }, {
      "text": "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "writer": "Amelia Earhart"
    }, {
      "text": " Every strike brings me closer to the next home run.",
      "writer": "Babe Ruth"
    }, {
      "text": " Definiteness of purpose is the starting point of all achievement.",
      "writer": "W. Clement Stone"
    },
    {
      "text": " You can do more than you imagine.",
      "writer": "From me"
    }
  ]
};

function generate() {
  var random = Math.floor(Math.random() * Math.floor(11));
  var writer = qt.quotes[random].writer;
  var q = qt.quotes[random].text;
  document.getElementById('qe').innerHTML = '<center><blockquote>'+ q + ' ' + '</br>--' + writer + '</blockquote></center>';
}
