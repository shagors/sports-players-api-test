const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value ='';
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.countrys))
}

const displaySearchResult = countrys =>{
    const searchResult = document.getElementById('search-result');
    countrys.forEach(country =>{
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${country.strBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${country.strSport}</h4>
                    <h6>${country.strCountry}</h6>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}