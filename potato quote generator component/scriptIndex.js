var button = document.querySelector("#buttonQuote");
var quoteDisplay = document.querySelector("#quote");
var ownerDisplay = document.querySelector("#quoteOwner");

button.addEventListener("mousedown", function () {
  button.id = "buttonClicked";
});

button.addEventListener("mouseup", function () {
  button.id = "buttonQuote";
});

const quotes = [
  {
    quote:
      "A lot of my work is like picking potatoes; you have to get into the rhythm of it. It is different than patience. It is not thinking. It is working with the rhythm.",
    owner: "Andy Goldsworthy",
  },
  {
    quote:
      "Prayer is good, but when baked potatoes and milk are needed, prayer will not supply their place.",
    owner: "Brigham Young",
  },
  {
    quote:
      "Papa, potatoes, poultry, prunes and prism, are all very good words for the lips.",
    owner: "Charles Dickens",
  },
  {
    quote: "What small potatoes we all are, compared with what we might be!",
    owner: "Charles Dudley Warner",
  },
  {
    quote:
      "Shakespeare is like mashed potatoes, you can never get enough of him.",
    owner: "Frank McCourt",
  },
  {
    quote:
      "Usually I trundle about in trainers and baggy jeans, looking about as attractive as a potato.",
    owner: "Gail Porter",
  },
  {
    quote:
      "I always felt that the boiled potato, not the tudor rose, should be the national emblem.",
    owner: "Ilka Chase",
  },
  {
    quote:
      "What I say is that, if a fellow really likes potatoes, he must be a pretty decent sort of fellow.",
    owner: "A. A. Milne",
  },
  {
    quote:
      "After a tough day, I go eat some steak and potatoes and take a shower.",
    owner: "Adrien Broner",
  },
  {
    quote: "I very much like potatoes.",
    owner: "Jacob Rees-Mogg",
  },
  {
    quote:
      "I'm a lager drinker. I'm quite a stupid lager drinker. I do like my lager and mashed potatoes.",
    owner: "Rhona Mitra",
  },
  {
    quote: "A 10-pound sack of potatoes lasts a long time.",
    owner: "Octavia E. Butler",
  },
  {
    quote: "I like French fries; I like mashed. I love potatoes.",
    owner: "Mary J. Blige",
  },
  {
    quote:
      "I'd like something that peels potatoes really quickly - that would be wonderful.",
    owner: "Terry Jones",
  },
  {
    quote:
      "The man who has nothing to boast of but his ancestors is like a potato - the only good belonging to him is under ground.",
    owner: "Sir Thomas Overbury",
  },
  {
    quote:
      "Only two things in this world are too serious to be jested on, potatoes and matrimony.",
    owner: "Anonymous Irish Saying",
  },
  {
    quote: "The potato, like man, was not meant to dwell alone.",
    owner: "Shila Hibben",
  },
  {
    quote:
      "Not everyone can be a truffle. Most of us are potatoes. And a potato is a very good thing to be.",
    owner: "Massimo Bottura",
  },
  {
    quote:
      "My idea of heaven is a great big baked potato and someone to share it with.",
    owner: "Oprah Winfrey",
  },
  {
    quote:
      "Potatoes were the waiters, potatoes were the band, and potatoes were the dancers.",
    owner: "Vachel Lindsay",
  },
];

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quoteDisplay.innerText = quotes[random].quote;
  ownerDisplay.innerText = quotes[random].owner;
});
