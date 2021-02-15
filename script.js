$(document).ready(function() {
var m8b = {};

m8b.listOfAnswers = ["It is certain", "It is decidely so", "Without a doubt", "Yes-definitely", "You may rely on it", "As I see it YES", "Most likely", "Outlook good", "Yes", "Signs point YES", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say NO", "Outlook not so good", "Very doubtful"];
	
	$("#answer").hide();

m8b.askQuestion = function(question) {
	$("#answer").fadeIn(4000);
     var randomNumber = Math.random();
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
     var answer = this.listOfAnswers[randomIndex];

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").text(answer);
	
	console.log(question);
	console.log(answer);
};

    var onClick = function() {
    	$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           m8b.askQuestion(question);
       }, 500);
   $("#8ball").effect("shake");

};
   $("#questionButton").click( onClick );
	
	
});