const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

createPost({ title: "Post 1" })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log(posts);
        console.log(lastActivityTime);
    })
    .then(() => createPost({ title: "Post 2" }))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log(posts);
        console.log(lastActivityTime);
    })
    .then(() => deleteLastPost())
    .then((deletedPost) => {
        console.log(`Deleted Post: ${deletedPost.title}`);
        console.log(posts);
    })
    .catch((error) => console.log(error));