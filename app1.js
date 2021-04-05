const results = document.querySelector('#results');

 async function asyncFetch(value){
     const result = await fetch (`https://swapi.dev/api/${value}/`);
     const data = await result.json();
     console.log(data);
     displayResults(data, value)
 }

function displayResults(data, value){
    let output = "";
    console.log(data);
    if (value === 'films'){
        data.results.forEach(item => {
            output += `
            <div class = "card">
                <h4 class = "card-title">${item.title}</h4>
                <div class = "card-content">
                    <p><span>Producer</span>: ${item.producer}</p><br>
                    <p><span>Director</span>: ${item.director}</p><br>
                    <p><span>Release Date</span>: ${item.release_date}</p><br>
                    <p class = "" >${item.opening_crawl}</p>
                </div>
            </div>
            `
        });
    }
    if (value === 'people'){
        data.results.forEach(item => {
            output += `
            <div class = "card">
                <h4 class = "card-title">${item.name}</h4>
                <div class = "card-content">
                    <p><span>Height</span>: ${item.height}</p><br>
                    <p><span>Birth Year</span>: ${item.birth_year}</p><br>
                    <p><span>Skin Color</span>: ${item.skin_color}</p><br>
                </div>
            </div>
            `
        });
    }
    if (value === 'starships'){
        data.results.forEach(item => {
            output += `
            <div class = "card">
                <h4 class = "card-title">${item.name}</h4>
                <div class = "card-content">
                    <p><span>Model</span>: ${item.model}</p><br>
                    <p><span>Manufacturer</span>: ${item.manufacturer}</p><br>
                    <p><span>Crew</span>: ${item.crew}</p><br>
                </div>
            </div>
            `
        });
    }
    results.innerHTML = output;
}

// event listeners
document.getElementById('buttons').addEventListener('click', event =>{
    console.log(event);
    asyncFetch(document.querySelector('input[name="option"]:checked').value
    );
})