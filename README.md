# manage-tweet

## installation

    npm install manage-tweets
## Usage

A simple npm project, `manage-tweets`!

```js
var manage = require('manage-tweets');
manage.addTweet("pippo franco", "ciao cari") // create one tweet
console.log(users.deleteTweetByID(1)); // delete a tweet by id 
console.log(users.modifyTweetByID(0, "oh come on")); // modify one tweet by id
console.log(users.findTweetByAuthor("pippo franco")); // search tweet by author
console.lgo(users.findTweetByContext("oh come")); //find the context of a tweet description
users.reset(); // reset the tweets

```
