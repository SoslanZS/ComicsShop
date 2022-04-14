const App = Vue.createApp({
    data()
    {
        return {
            page: 'about-as',
        }
    },
    methods:{
        sliderNext()
        {
            const width = this.$refs.slider;
            const sliderEl = this.$ref.sliderItem;
            console.log(sliderEl);
        },
    },
    mounted()
    {
        this.sliderNext();
    }
})

App.mount('#app');