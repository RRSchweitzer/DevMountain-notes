
// $().something(callback(){}); 
// //could also be: jquery().something(callback(){});

// $(thingISelected).xyz(cb(){});

$(document).ready(function(){

	$('#submit').on('click', function() {
		var name = $('#name').val();
		var markup = '<p>' + name + '</p>';
		$('#content').prepend(markup);
		$('#name').val('');
	});

	$('#content').on('click', '.list-item', function() {
		$(this).css('color', 'red'); //great usage of the this keyword.
	});
});



// $('#content').on('mouseenter', function()  {
// 	$('.box').css('background', 'red');
// });

// $('#content').hide();
// $('#content').show();

// $('#content1, #content2')

// .prepend //add sudo html into the DOM
// .apphend //same as .prepend but it goes below instead of on top

// var tyler = $('<p #id="tyler">Tyler Mcginnis</p>')

// $('#content').apphend(tyler).css('color', 'white');

// $('#content').on('click', function() {
// 	tyler.remove();
// })

// .animate
