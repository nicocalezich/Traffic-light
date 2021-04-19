new Vue({
    el: '#app',
    data: {
        red: document.getElementById('red'),
        yellow: document.getElementById('yellow'),
        green: document.getElementById('green'),
        redNGrenTime: 10000,
        yellowTime: 3000,
        isOn: false,
        btntext: "Turn on",
        btn: document.getElementById('btn')
    },

    methods: {
        iniciar(){
            setTimeout(this.redToYellow, this.redNGrenTime);
            this.btntext = "Initiated"
            btn.disabled = true
          },
          
          redToYellow(){
            red.style.backgroundColor = 'white'
            yellow.style.backgroundColor = 'yellow'
            setTimeout(this.yellowToGreen, this.yellowTime);
          },
          
          yellowToGreen(){
            yellow.style.backgroundColor = 'white'
            green.style.backgroundColor = 'green'
            setTimeout(this.greenToYellow, this.redNGrenTime);
          },
          
          greenToYellow(){
            yellow.style.backgroundColor = 'yellow'
            green.style.backgroundColor = 'white'
            setTimeout(this.yellowToRed, this.yellowTime);
          },
          
          yellowToRed(){
            yellow.style.backgroundColor = 'white'
            red.style.backgroundColor = 'red'
            this.iniciar()
          }
          
    }
});