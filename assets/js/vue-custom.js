var data = {
        test: "Hello World",
        appTitle: "HOME LIGHT",
        toggleMode: false,
        lightIntensity:60,
        darkOpacity: '#000000',
        darkscene: '',
    }
    new Vue({
        el: '#app',
        data: data,
        methods: {
            changeOpacity: function () {
                this.darkscene = this.darkOpacity+this.lightIntensity;
            }
        },
        mounted() {
            // console.log(this.darkOpacity+this.lightIntensity);
            this.darkscene = this.darkOpacity+this.lightIntensity;
            this.$vs.loading()
            setTimeout( ()=> {
                this.$vs.loading.close()
            }, 2000);
        }
    })
    