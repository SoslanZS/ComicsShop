const App = Vue.createApp({
    data()
    {
        return {
            page: 'about-as',
            // about-as
            // catalog
            // basket
            // our-place
            // registration
            // authorization

            burgerActive: false,
            images: 
            [
                {way: 'img/buket.png'},
                {way: 'img/buket.png'},
                {way: 'img/buket.png'},
                {way: 'img/buket.png'},
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