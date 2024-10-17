
test("Adding New Item", async () => {
  const response = await fetch('http://localhost:8088/api/ToDoItems', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 0,
        name: "string",
        isComplete: true
    })
  })
  .then((data) => { return data.json() })
  

  const item = response;

  expect(response.id).toBeDefined()
  console.log(item);
});
