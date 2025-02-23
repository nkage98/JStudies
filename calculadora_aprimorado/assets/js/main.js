function newCalculator(){
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.clickbtn();
            this.Enter();
        };

        this.Enter = () => {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.calculate();
                } 
            });
        };

        this.clear = () => this.display.value = '';

        this.del = () => this.display.value = this.display.value.slice(0, -1); 

        this.calculate = () => {
            try{
                const eq = eval(this.display.value);

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
        };

        
        this.clickbtn = () => { document.addEventListener('click', e => {

                const el = e.target;

                if(el.classList.contains('btn-num')) this.addNumDisplay(el);

                if(el.classList.contains('btn-clear')) this.clear();

                if(el.classList.contains('btn-del')) this.del(el);

                if(el.classList.contains('btn-eq')) this.calculate(el);
            });
        };

        this.addNumDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        }
}

const calculadora = new newCalculator();
calculadora.inicia();