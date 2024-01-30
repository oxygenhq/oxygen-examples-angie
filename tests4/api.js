var response = http.get(
    'https://www.googleapis.com/books/v1/volumes?q=9781451648546', 
    {'content-type':'application/json'})
log.info(response)
assert.equal(response.body.totalItems, 1709, "Total items incorrect")
assert.equal(response.body.items[0].id, 'nvgdAwAAQBAJ', "Item ID incorrect")