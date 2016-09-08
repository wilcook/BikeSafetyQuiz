$("document").ready(function(){

    $("#timeBox").hide();
    
    var questions = [{
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 3
}, {
    question: "Bicycle??",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle???",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 0
}, {
    question: "Bicycle????",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 2
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 2
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 0
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 3
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 3
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 0
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 1
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 0
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 3
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 0
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 3
}, {
    question: "Bicycle?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: 2
}];

var stopwatch = {
time: 30,
counter: 0,
reset: function () {
    stopwatch.time = 30;
    $("#displayTime").replaceWith("30");
},
start: function(){
    //Use setInterval to start the count here
       stopwatch.counter = setInterval(stopwatch.count, 1000);

},
stop: function(){
    //Use clearInterval to stop the count here
    clearInterval(stopwatch.counter);
},
count: function(){
    //increment time by 1, remember we cant use "this" here
    stopwatch.time--;
    $("#displayTime").html(stopwatch.time);
}
};


$("#startQuiz").click(function(){
    var q = 0;
    $("#question").replaceWith("<p>"+questions[q].question+"</p?");
    $("#quizTitle").replaceWith("")
    $(".btn:last-child").remove();
    $(".btn:first-child").replaceWith('<a id="startQuiz" class="waves-effect waves-light btn">0</a><p><a id="startQuiz" class="waves-effect waves-light btn">1</a></p><p><a id="startQuiz" class="waves-effect waves-light btn">2</a><p><a id="startQuiz" class="waves-effect waves-light btn">3</a></p>');
    q++;
    $("#timeBox").show();
    stopwatch.stop();
    stopwatch.time = 31;
    stopwatch.start();



}
);


})