function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}


function iLoveTheBeatles(num) {
    let shoutArray = [];
    do {
        shoutArray.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return shoutArray;
}
