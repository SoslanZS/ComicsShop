const App = Vue.createApp({
    data()
    {
        return {
            page: 'about-as',
            slider: document.querySelector('.slider'),
        }
    },
    methods: {
        sliderNext()
        {

        },
    },
    mounted()
    {
        console.log(this.slider); 
    }
})

App.mount('#app');