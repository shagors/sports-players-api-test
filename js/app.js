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
    for(const country of countrys){
        console.log(country);
    }
}