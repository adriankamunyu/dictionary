const api = "https://api.dictionaryapi.dev/api/v2/entries/en"
const resultDisplay = document.getElementById("result-display")



async function findWord(word) {
    if (!word) return; {
        
        try {

            resultDisplay.innerHTML = '<p>Loading word</p>'

            const response = await fetch(`${api}/${word.toLowercase()}`)
            
            if (!response.ok); {
        throw new error('Word not found');

        const data = await response.json();
        
        resultDisplay.innerHTML = `
         <h2>${data.name}</h2>
         <p>${data.meanings}</p>
        `;
        }

        } catch (error) {
            resultDisplay.innerHTML = `<p>Error: ${error.message}</p>`
            console.error(error)
        }
    }
}   
