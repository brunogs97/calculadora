function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        cliqueBotoes() {
            document.addEventListener('click', e => { // arrow Function não modifica o this
                const el = e.target

                if (el.classList.contains('btn-num')) { // pegar o evento de click apenas em 'btn-num'
                    this.btnParaDisplay(el.innerText)  // pegar o innertText = valor
                }

                if (el.classList.contains('btn-clear')) { //
                    this.btnClear()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        btnClear() {
            this.display.value = ''
        },

        realizaConta() {
            let conta = this.display.value // pega os valores no display

            try {
                conta = eval(conta) // realiza a conta

                if(!conta) {
                    alert('conta inválida!')
                    return
                }

                this.display.value = conta // mostrar o cálculo no display
            } catch(e) {
                alert('conta inválida!')
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        }

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()