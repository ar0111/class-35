const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayOurTours(data))
}

const displayOurTours = (countries) =>{
    const getCountriesHTML = countries.map((country) => getCountryHTML(country));
    const countriesHTML = getCountriesHTML.join(" ");
    document.getElementById('country').innerHTML = countriesHTML;
}

const getCountryHTML = ({capital, population}) =>{
    // console.log(country);
    // const {capital, population} = country;
    return `
        <div style="padding: 10px; background-color: yellow; border-radius:5px;">
            <p>${capital}</p>
            <p>${population}</p>

        </div>
    `
}

loadCountries();


