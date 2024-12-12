document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);

    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');
    const triviaDisplay = document.getElementById('triviaDisplay');

    generateButton.addEventListener('click', function () {
        fetch('http://numbersapi.com/random/trivia')
            .then(response => response.text())
            .then(data => {
                triviaDisplay.textContent = data;
                copyButton.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching trivia:', error);
                triviaDisplay.textContent = 'Failed to fetch trivia. Please try again.';
                copyButton.style.display = 'none';
            });
    });

    copyButton.addEventListener('click', function () {
        const text = triviaDisplay.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Trivia copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});