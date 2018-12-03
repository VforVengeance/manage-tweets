var assert = require('assert');
var manage = require('./index.js');



describe('test function addTweet', function() {
    it('test successful case',
    function(){
        assert.equal(typeof manage.addTweet("carlo leonardi", "ciao"), 'undefined');
    });
});

describe('test function deleteTweetByID', function() {
    it('test successful case',
    function(){
        assert.equal(typeof manage.deleteTweetByID(0), 'object');
    });
});

describe('test function findTweetByAuthor', function() {
    it('test successful case',
    function(){
        assert.equal(typeof(manage.findTweetByAuthor("carlo")), 'object');
    });
});

describe('test function findTweetByContext', function() {
    it('test successful case',
    function(){
        assert.equal(typeof(manage.findTweetByContext("ciao")), 'object');
    });
});


describe('test function modifyTweetByID', function() {
    it('test successful case',
    function(){
        manage.addTweet("carlo leonardi", "ciao");
        manage.addTweet("carlo leonardi", "come stai");
        assert.equal(typeof (manage.modifyTweetByID(1, "ciao come stai")), 'object');
    });
});