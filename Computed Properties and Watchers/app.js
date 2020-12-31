const vm = Vue.createApp({
    data() {
        return {
            firstName: "Taen",
            lastName: "Ahammed",
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
        fullName: {
            get() {
                return this.firstName + " " + this.lastName;
            },

            set(newValue) {
                const names = newValue.split(" ");
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            },
        },

        publishedBooksMessage() {
            return this.author.books.length > 0 ? "Yes" : "No";
        },
    },
}).mount("#computed-basics");
