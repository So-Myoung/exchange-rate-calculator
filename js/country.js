const country = document.getElementById("country");

const getCountryCode = async () => {
    const response = await fetch('https://ipinfo.io/json?token=c76190236a0eea')
    if (response.status === 200) {
    const location = await response.json()
    return [location.country,location.city];
    } else {
    throw new Error('Unable to get your location')
    }
}

getCountryCode().then(location => {
    country.innerText = `${location[0]} / ${location[1]}`;
});