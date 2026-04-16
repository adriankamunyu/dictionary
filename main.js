const api = "https://api.dictionaryapi.dev/api/v2/entries/en"
const resultDisplay = document.getElementById("result-display")
const submitBtn = document.getElementById("info")
const submitInfo = document.getElementById("input")
const form = document.querySelector('form')

async function findWord(word) {
    if (!word) return;

    try {
        resultDisplay.innerHTML = '<p>Loading word...</p>';
        const response = await fetch(`${api}/${word.toLowerCase()}`);

        if (!response.ok) {  // Fixed: only throw error when response is NOT ok
            throw new Error('Word not found');
        }

        const data = await response.json();

        resultDisplay.innerHTML = `
            <h2>${data[0]?.word || 'Word not found'}</h2>
            <p>${data[0]?.meanings?.[0]?.definitions?.[0]?.definition || 'No definition available'}</p>
        `;
    } catch (error) {
        resultDisplay.innerHTML = `<p>Error: ${error.message}</p>`;
        console.error(error);
    }
}
    


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const word = submitInfo.value.trim();
    if (word) {
        findWord(word)
    } else {
        resultDisplay.innerHTML = `<p>Please enter a word.</p>`
    }
})
