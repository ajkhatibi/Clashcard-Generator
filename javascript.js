var command = process.argv[2];
var fs = require('fs');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Khatibi1!2',
  database : 'flashcards'
});

connection.connect();

function query(){
	var mysql = require('mysql');
	var connection = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : 'Khatibi1!2',
  		database : 'flashcards'
});

connection.connect();
connection.query('SELECT * FROM favorite_list' , function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0]);
  process.exit();
});

};


connection.query('UPDATE favorite_list SET ? WHERE ?' , function(err, rows, fields) {
  if (err) throw err;


  console.log('The solution is: ', rows[0]);

  process.exit();
});

connection.end();

 


fs.readFile('projectLog.txt', 'utf8', function(error, data){
	var content = '';
	if(error) return console.log(error);
	content += data
	
	if(typeof content === 'string'){
	
	console.log(content.split(',')[1]);
	var inquirer = require('inquirer');
	inquirer.prompt([
	{
		name: 'firstQ',
		message: content.split(',')[0]
	},
	{
		name: 'secondQ',
		message: content.split(',')[1]
	},
	{
		name: 'restart',
		message: 'Would you like to restart your flashcard study?'
	}
		]).then(function(answers){
			if(answers.restart === 'yes'){
				prompt();
			}

		})

	} else {
		prompt();
	}

})

function BasicFlashcard(front, back){
	//something important here
	this.front = front
	this.back = back
}

function ClozeFlashcard(text, cloze){
	//something important here
}


function saveToFile(){
	var fs = require('fs');
	var nodeArg = process.argv;
	var string = '';
	for(var i = 3; i < nodeArg.length; i++){
	string += ' ' + nodeArg[i]
	}
fs.writeFile('projectLog.txt', string, function(error){
	if(error) return console.log(error);
	console.log('string > projectLog.txt');
	})
};


function prompt(){
var inquirer = require('inquirer');
inquirer.prompt([
	{name: 'phase one',
	message: 'Would you like to begin your flashcard studies?',
	choices: ['yes', 'no']
}]).then(function(answers){
	if(answers === 'no'){
		process.exit();
	} else {
		var inquirer = require('inquirer');
		inquirer.prompt([
				{
					name: 'count',
					message: 'How many questions would you like to make?'
				}

			]).then(function(answers){
				var countNum = parseInt(answers.count)
				for(var i = 0; i < countNum; i++){
					var inquirer = require('inquirer');
					inquirer.prompt([
				{
					name: 'q'i,
					message: 'Type your question...'
				},
				{
					name: 'a'i,
					message: 'Type your answer....'
				}

			]).then(function(answers){
				var fs = require('fs');
				for(var i = 0; i < countNum; i++){
					var iresponse = i;
					var iresponse = new BasicFlashcard(answers.qi, answers.ai)
					var array = push(iresponse.front)
					fs.writeFile('projectLog.txt', array, function(error){
					if(error) return console.log(error);
					console.log('string > projectLog.txt');
					})

					


				}

			})
				}
			})
	}


}) 
// {
// 	name: 'Q1',
// 	message: 'Q1: Type your question!',

// },
// {
// 	name: 'A1',
// 	message: 'Q1: Type your answer!',
// },
// {
// 	name: 'Q2',
// 	message: 'Q2: Type your question!',

// },
// {
// 	name: 'A2',
// 	message: 'A2: Type your answer!',
// },
// {
// 	name: 'Q3',
// 	message: 'Q3: Type your question!',

// },
// {
// 	name: 'A3',
// 	message: 'A3: Type your answer!',
// },
// {
// 	name: 'Q4',
// 	message: 'A4: Type your question!',

// },
// {
// 	name: 'A4',
// 	message: 'A4: Type your answer!',
// },

// ]).then(function(answers){
// 	var fs = require('fs');
// 	var question1 = new BasicFlashcard(answers.Q1, answers.A1)
// 	var question2 = new BasicFlashcard(answers.Q2, answers.A2)
// 	var question3 = new BasicFlashcard(answers.Q3, answers.A3)
// 	var question4 = new BasicFlashcard(answers.Q4, answers.A4)
// 	var questionArray = [question1.front, question2.front, question3.front, question4.front]
	
// 	fs.writeFile('projectLog.txt', questionArray, function(error){
// 	if(error) return console.log(error);
// 	console.log('string > projectLog.txt');
// 	})



// })
};


function flashCard(){
	
}
