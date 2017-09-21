// Daily cool Job Shuffler
//
//
// Usage:
//  dacjesh
//
// 'dacjesh' is an absolute fun time-spend. It produces
// funny job titles that sometimes don't make sense.
// Most of the time they do.
//
// Variables and terminology
//
// gitle = glamorous IT title. This is produced and printed out of this program.
// uword = unique word. A string literal.
//
//
// WIP:
// 1. remove dupe words from gitles; ie. a gitle should only have 1 occurrence of uword
// 2. remove repetitive words from gitles; ie. no 'Poacher Poacher' -> instead 'Poacher'
// 3. bug; an error, possibly: 'node: no process found' when running this program
//
// Wishlist and discussions:
// Please refer to github project page

var positionsOpen = 5
var maxWordsInTitle = 4
var useEndWord = true   // Will always terminate the Title with a pick from 'endWords'

// The vocabulary - this is the core of our AI
var fillers = [ 'with' ]

var descWord = [ 'Adamant', 'All-star', 'Brave', 'Passionate', 'Glittering', 'Sparkling', 'Energetic' ]
var endWords = [ 'Pimp', 'Roaster', 'Teacher', 'Poacher', 'Coach', 'Suit',
  'Officer', 'Hero', 'Disruptor', 'Developer', 'Engineer',
  'Hoodie', 'Officer', 'Clerk']

var roles = [ 'Startup', 'Developer', 'Entry-level',
  'Enterprise',
  'Professional',
  'Ledger',
  'Strategist',
  'Architect',
  'Senior',
  'Kotlin',
  'Java',
  'SQL',
  'Full',
  'Stack',
  'Test',
  'Junior',
  'Cloud']

const maxTitleWords = 4

function randint (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min
}

// Curries (accumulates) a gitle by mixing words from
// 'roles' array
/**
 * Creates a new randomized gitle, a "job title".
 * @param  {Number} maxWords How many words to produce into the gitle
 * @return {string} your gitle
 */
function doTheJob (maxWords) {
  var cast = randint(2, maxWords + 1)
  var rolesCnt = roles.length
  var endwordsCnt = endWords.length
  var currentTitle = ''
  for (var i = 0; i < cast; i++) {
    var lastWordNow = i === (cast - 1)
    var rndPickIndex = 0
    if (!lastWordNow) {
        // Ordinary round, we add from the 'roles' word array
      rndPickIndex = randint(0, rolesCnt)
      currentTitle = currentTitle + roles[rndPickIndex] + ' '
    } else {
        // Last word is now, so we add a word from 'endWords', if that's desired.
        // Anyways, we will not add a space to the last word, regardless of what it
        // is..
      if (useEndWord) {
        rndPickIndex = randint(0, endwordsCnt)
        currentTitle = currentTitle + endWords[rndPickIndex]
      } else {
        rndPickIndex = randint(0, rolesCnt)
        currentTitle = currentTitle + roles[rndPickIndex]
      }
    }
  }

  // Measure the length of description words (adjectives) and pick one random
  descCnt = descWord.length
  rndIndx = randint(0, descCnt)

  // Use the 'adjective' (descWord) prefix to work Title string
  return descWord[rndIndx] + ' ' + currentTitle
}

// Generate all the 'positionsOpen' number of jobs and print them in console
for (var i = 0; i < positionsOpen; i++) {
  console.log(doTheJob(maxWordsInTitle))
}
