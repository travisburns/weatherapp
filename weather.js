const key = `52276fcc4e67e7c6e26af4dba83aae09`;



const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL+query);


    //promise data 
    const data = await response.json();
    return data;
}


