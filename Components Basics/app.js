const App = {
    data() {
        return {
            posts: [
                { id: 1, title: "My journey with Vue" },
                { id: 2, title: "Blogging with Vue" },
                { id: 3, title: "Why Vue is so fun" },
            ],
            postFontSize: 1,
        };
    },
};

const app = Vue.createApp(App);

app.component("blog-post", {
    props: ["title"],

    template: `
        <div class='blog-post'>
            <h4>{{title}}</h4>
            <button @click="$emit('enlargeText')">
                Enlarge text
            </button>
        </div>
    `,
});

app.mount("#blog-posts-events-demo");
