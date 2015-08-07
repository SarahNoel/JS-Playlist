var Song = require('./song');

var Playlist = function(){
  this.playlist = [];
  this.songPlaying = null;
};

Playlist.prototype.isEmpty = function () {
  if(this.playlist.length === 0){
    return true;
  }else{
    return false;
  }
};

Playlist.prototype.addSong = function (song) {
  this.playlist.push(song);
};

Playlist.prototype.songNames = function () {
  var song;
  var songArray =[];
  for (var i = 0; i < this.playlist.length; i++) {
    song = this.playlist[i].name;
    songArray.push(song);
  }
  return songArray;
};

Playlist.prototype.removeSong = function(song){
  var index = this.playlist.indexOf(song);
  if(index > -1){
    this.playlist.splice(index, 1);
  }
};

Playlist.prototype.totalLength = function() {
  var length= 0;
  for (var i = 0; i < this.playlist.length; i++) {
    length += this.playlist[i].length;
  }
  return length;
};

Playlist.prototype.swap = function(song1, song2) {
  var index1 = this.playlist.indexOf(song1);
  var index2 = this.playlist.indexOf(song2);
  if(index1 > -1 && index2 > -1){
    this.playlist.splice(index1, 1, song2);
    this.playlist.splice(index2, 1 ,song1);
  }else{
    console.log("Sorry, I can only sway songs in the playlist.");
  }
};

Playlist.prototype.play = function(){
  this.songPlaying = this.playlist[0];
};

Playlist.prototype.nowPlaying = function(){
  return this.songPlaying;
};

Playlist.prototype.next = function(){
  if (this.songPlaying !== null){
    var index = this.playlist.indexOf(this.songPlaying);
    if (index < this.playlist.length-1){
      this.songPlaying = this.playlist[index+1];
      return this.songPlaying;
    }else{
      this.songPlaying = null;
      return this.songPlaying;
    }
  }
  else{
    this.songPlaying = null;
    return this.songPlaying;
  }
};

module.exports = Playlist;
