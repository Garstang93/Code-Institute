var profile = "I am a web developer developing in html css and javascript";

var stops = ["i","am","a","and"]; //words to be removed from profile



function cleanProfile (profile, stops) {
  var words = profile.split(" ");




var newProfile = [];


for (var i=0; i<words.length; i++){
  if (stops.indexOf(words[i].toLowerCase()) === -1) {
    newProfile.push (words[i])
  }
}
return newProfile;
}

console.log("clean profile words:");
console.log (cleanProfile(profile, stops));