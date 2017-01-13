
"use strict";

var fs = require('fs');
var bencode = require('bencode')

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'))
console.log(JSON.stringify(torrent.toString('utf8')))