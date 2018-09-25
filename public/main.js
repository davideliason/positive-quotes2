var update = document.getElementById('update');

update.addEventListener('click', () => {
	// alert("clicked");
	fetch('quotes', {
 		 method: 'put',
  		 headers: {'Content-Type': 'application/json'},
  		 body: JSON.stringify({
   		   'name': 'john',
   		   'quote': 'this is a new quote via _id'
  		})
	})
});