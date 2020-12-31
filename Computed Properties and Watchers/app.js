const WatchExampleVM = Vue.createApp({
    data() {
        return {
            question: "",
            answer: "Questions usually contain a question mark. :-)",
        };
    },

    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf("?") > -1) {
                this.getAnswer();
            }
        },
    },

    methods: {
        getAnswer() {
            this.answer = "Thinking...";
            axios
                .get("https://yesno.wtf/api")
                .then((res) => {
                    this.answer = res.data.answer;
                })
                .catch((error) => {
                    this.answer = "Error! Could not reach the API. " + error;
                });
        },
    },
}).mount("#watch-example");
