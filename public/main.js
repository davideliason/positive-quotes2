var update = document.getElementById('update');

update.addEventListener('click', () => {
	// alert("clicked");
	fetch('quotes', {
 		 method: 'put',
  		 headers: {'Content-Type': 'application/json'},
  		 body: JSON.stringify({
  		   'id' : 'johntest1', 	
   		   'name': 'john',
   		   'quote': 'this is a new quote via _id4'
  		})
	}).then(res => {
  if (res.ok) return res.json()
  })
.then(data => {
  console.log(data)
 })
});

var del = document.getElementById('delete')

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'id': 'johntest1'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  }).
  then(data => {
    console.log(data)
    window.location.reload()
  })
})