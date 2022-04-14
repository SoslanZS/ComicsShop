const App = Vue.createApp({
    data()
    {
        return {
            page: 'about-as',
            images: 
            [
                {way: 'img/dad.png'},
                {way: 'img/dad.png'},
                {way: 'img/dad.png'},
                {way: 'img/dad.png'},
            ],
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