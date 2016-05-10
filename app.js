var app=angular.module('app',[]);
app.controller('ctrl',function($scope){
 $scope.availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $scope.complete=function(){
    console.log($scope.availableTags);
  $( "#tags" ).autocomplete({
    source: $scope.availableTags,
    minLength: 1
  });
  }
});
