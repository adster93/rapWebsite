//wordInput function finds submitted word and amount
$(function(){
	wordInput = function(){
		var query = $('#searchBox').val();
		var number = $('#num').val()
		console.log(query)
		console.log(number)
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'http://api.wordnik.com:80/v4/word.json/' + query + '/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=' + number + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
			success: function(data){
				// console.log(data)
				//console.log(data[0].words)
				var rhymeWords = [];
				for(i=0; i<data[0].words.length; i++){
					//console.log(data[0].words[i])
					rhymeWords.push(data[0].words[i])
				}
					$('#rhymeBox').empty()
					for(i=0; i<rhymeWords.length; i++){
						$('#rhymeBox').append('<p>' + rhymeWords[i] + '<p>')
					};
				console.log(rhymeWords)
			 	}
			 })
		return false
		}
		$('#subBut').on('click', wordInput)
		// $('#subBut').on('click', addDiv)
	})


// $('').click(function(){
// 	alert('handler is clicked')
// })



//wordInput function finds submitted word and amount
// $(function(){
// 	wordInput = function(){
// 		var query = $('#searchBox').val();
// 		var number = $('#num').val()
// 		console.log(query)
// 		$.ajax({
// 			type: 'GET',
// 			dataType: 'json',
// 			url: 'http://api.wordnik.com:80/v4/word.json/' + query + '/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=' + number + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
// 			success: function(data){
// 				console.log(data)
// 				//console.log(data[0].words)
// 				var rhymeWords = [];
// 				var rhymeWords2 = [];
// 				for(i=0; i<data[0].words.length; i++){
// 					//console.log(data[0].words[i])
// 					rhymeWords.push(data[0].words[i])
// 				}
// 				console.log(rhymeWords)
// 			 	for(i=0; i<data[0].words.length; i++){
// 			 		rhymeWords2.push(data[0].words[i])
// 			 	}
// 			 	console.log(rhymeWords2)
// 			 })	
// 		return false
// 		}
// 		$('#subBut').on('click', wordInput)
// 			//console.log(wordInput())
// 		$('#subBut').on('click', function(){
// 		})
// });
// });





