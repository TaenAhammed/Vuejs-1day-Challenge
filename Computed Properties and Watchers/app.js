Vue.createApp({
    data() {
        return {
            author: {
                name: "John Doe",
                books: [
                    "Vue 2 - Advanced Guide",
                    "Vue 3 - Basic Guide",
                    "Vue 4 - The Mystery",
                ],
            },
        };
    },

    computed: {
        publishedBooksMessage() {
            return this.author.books.length > 0 ? "Yes" : "No";
        },
    },
}).mount("#computed-basics");
