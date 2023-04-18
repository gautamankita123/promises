const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
}

async function createNewPost(post) {
    await createPost(post);
    await updateLastUserActivityTime();
}

async function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

async function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            console.log("Last activity time:", lastActivityTime);
            resolve();
        }, 1000);
    });
}

const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got cold drinks!");
            resolve();
        }, 3000);
    });
};

// Async/Await implementation
async function performTasksAsync() {
    try {
        await createNewPost({ title: "First post" });
        await createNewPost({ title: "Second post" });
        await getColdDrinks();
        const deletedPost = await deletePost();
        console.log("Deleted post:", deletedPost);
        console.log("Posts:", posts);
    } catch (error) {
        console.log("Error:", error);
    }
}

performTasksAsync();

// Promises implementation
createNewPost({ title: "First post" })
    .then(() => createNewPost({ title: "Second post" }))
    .then(() => getColdDrinks())
    .then(() => deletePost())
    .then((deletedPost) => {
        console.log("Deleted post:", deletedPost);
        console.log("Posts:", posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    });