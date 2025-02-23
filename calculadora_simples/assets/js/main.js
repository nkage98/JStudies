function newCalculator(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.clickbtn();
            this.Enterclick();
        },

        Enterclick(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.calculate();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        eraseone(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate(){
            let eq = this.display.value;

            try{
                eq = eval(eq);

                if(!eq){
                    alert('Conta Inválida');
                    this.clearDisplay();
                    return;
                }
                this.display.value = String(eq);
            }
            catch(e){
                alert('Conta inválida');
                this.clearDisplay();
                return;

            }
        },

        
        clickbtn(){
            document.addEventListener('click', e => {

                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.showdisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.eraseone();
                }

                if(el.classList.contains('btn-eq')){
                    this.calculate();
                }

            });

        },

        showdisplay(valor){
            this.display.value += valor;

        }
    }
}

const calculadora = newCalculator();
calculadora.inicia();