const api = 'https://swapi.dev/api/starships/';
export const searchStarships = async (name) => {
    fetch(`${api}?search=${name}`)
        // .then((response) => response.json())
        .then(async (response) => {
            const data = await response.json();
            console.log('app', data);
            return data;
        });
};
