Parse.initialize("o0CJuvQWQY15h5QdIcv9cNexSI3v4QspAsTpkZVZ", "CwF1Y2TKwtlMdaDtrKsEh5yKSnzsjFL0GjZTYzkF");

var Signup = function(name,pass,mail){
var user = new Parse.User();

user.set("username", name);
user.set("password", pass);
user.set("email", mail);


  user.signUp(null, {
    success: function(user) {
     // Hooray! Let them use the app now.
     alert("Creato Account Con successo");
     document.location.href="login.html";
   },
   error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
    }
  });
}

var Login = function(name,pass){
  Parse.User.logIn(name, pass, {
  success: function(user) {
  document.location.href = "index.html";
  },
  error: function(user, error) {
    alert("Password o Username non validi");
  }
});
}
