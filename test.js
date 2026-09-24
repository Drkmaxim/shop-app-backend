async function test() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}

test();