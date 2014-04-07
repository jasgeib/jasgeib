$(document).ready(function() {
	//press enter key to add items
	var list = $('#itemList');
	list.on('click', '.check', dimItem);
	list.on('click', '.delete', deleteItem);

	//.reset_button
	$('.reset_button').on('click', ResetList);
		
		
    $('.add_item').keypress(function(e) {
        if (e.which == 13) {
			// var write = $('.add_item').val();
			addListItem();
		}
    });


	function addListItem() {
		var write = $('.add_item').val(); // write holds the value of the input text field
		var newItem = $('.add_item'); 
		var item = $('<li><span class="list">'+ write +'</span><div class="button delete">X</div><div class="button check">&#x2713;</div></li>');
		
		if (write.length == 0  || write.length > 33) {
			return false;
		}
		
		list.append(item);
		item.slideDown(400);
		$(newItem).val('');
	}



	function deleteItem() { 
		$(this).parent().slideUp(
			function(){
				$(this).remove();
			}
		); // removes the grocery item when x is pressed
	}

	function dimItem() {
		$(this).parent().toggleClass('dim'); // dims/crosses out grocery item when check is pressed
	}
	
	function ResetList() {
		$('#itemList').children().remove();
	}
	
	
});
















