import fetch from "node-fetch";

const idPosts = [15, 23, 7, 3];

const getPostByIdPromise = (id: number) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(`Error: ${err}`));

// Promise chaining
getPostByIdPromise(2)
    .then(() => getPostByIdPromise(15))
    .then(() => getPostByIdPromise(23))
    .then(() => getPostByIdPromise(7))
    .then(() => getPostByIdPromise(3));


idPosts.reduce((accum, elem) => accum.then(() => getPostByIdPromise(elem)), Promise.resolve()); // used array


// Async / await
const getPostById = async (id: number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(await response.json());
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

(async () => {
    await getPostById(15);
    await getPostById(23);
    await getPostById(7);
    await getPostById(3);
})();

(async () => {
    for (const iterator of idPosts) { //used array
        await getPostById(iterator);
    }
})();


// Task 2
const getTodos = async (): Promise<any[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const json = await response.json();
    return json;
};


const printTodos = async () => {
    try {
        const todos = await getTodos();
        console.log(todos.map(({ id, title }) => ({
            id,
            title
        })));
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};


(async () => {
    printTodos();
})();




