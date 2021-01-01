const App = {
    data() {
        return {
            posts: [
                { id: 1, title: "My journey with Vue" },
                { id: 2, title: "Blogging with Vue" },
                { id: 3, title: "Why Vue is so fun" },
            ],
        };
    },
};

const app = Vue.createApp(App);

app.component("blog-post", {
    props: ["title"],

    template: `<h4>{{ title }}</h4>`,
});

app.mount("#blog-post-demo");
