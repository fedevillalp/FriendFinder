var express = require("express");
var path = require("path");
var friends = require("../data/friends.js");
var findFriend = require("../data/algorithm.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){

        console.log('This is POST:')
        //const newFriend = Object.values(req.body)
        var newFriend = req.body;
        //console.log(newFriend)

        friends.push(newFriend);
        
        //TODO Push New Friend to array located in friends.js
        console.log(friends);
        var index = findFriend(newFriend.scores,friends);
        var to_send = friends[index].photo
        console.log('tosend' + to_send);
        
        res.json({
            name: friends[index].name,   //friends[index].name,
            photo: friends[index].photo
        });

        res.end();

    })

}

