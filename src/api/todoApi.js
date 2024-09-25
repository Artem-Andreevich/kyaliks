const URL = "https://dummyjson.com/todos"
const LIMIT_PER_PAGE = 10


const getData = async (url, endpoint) => {
    const response = await fetch(`${url}?${endpoint}`);
    return await response.json();
};

export const todoApi = {
	baseURL: "https://dummyjson.com/todos",
	get: {
		data: (page) => getData(URL, `limit=${LIMIT_PER_PAGE}&skip=${(page - 1) * LIMIT_PER_PAGE}`),
	},
};