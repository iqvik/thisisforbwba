function sendText() {
    const text = document.getElementById('textInput').value;
    fetch('http://your-pc-ip-address:3000/speak', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
}
