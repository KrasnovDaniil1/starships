const api = 'https://swapi.dev/api/starships/';

export const SearchStarships = (name, page = 1) => {
    return fetch(`${api}?search=${name}&page=${page}`).then((r) => r.json());
};

export const AllStarships = (page = 1) => {
    return fetch(`${api}&page=${page}`).then((r) => r.json());
};
