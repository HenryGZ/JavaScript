class ValidateForm{
    constructor(){
        this.form = document.querySelector('.form'); // seleciona o form com a classe form
        this.events(); // chama o método events
    }

    events(){
        this.form.addEventListener('submit', e => { // adiciona um evento de submit no form
            this.handleSubmit(e); // chama o método handleSubmit
        });
    }

    handleSubmit(e){
        e.preventDefault(); // previne o comportamento padrão do submit

        const isValid = this.isValid(); // chama o método isValid
    }

    isValid() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.valid')){
            const label = field.previousElementSibling.innerText; // seleciona o label do campo
            if(!field.value){// verifica se o campo está vazio
                this.createError(field, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }
            if(field.classList.contains('cpf')){ // verifica se o campo tem a classe cpf
                if(!this.validateCPF(field)) valid = false; // chama o método validateCPF
            }
        };
        return valid;
    }

    validateCPF(field){
        const cpf = new ValidaCPF(field.value); // cria uma nova instância de ValidaCPF

        if(!cpf.valida()){ // verifica se o cpf é válido
            this.createError(field, 'CPF inválido.'); // chama o método createError
            return false;
        }
        return true;
    }

    createError(field, msg){
        const div = document.createElement('div'); // cria um elemento div
        div.innerHTML = msg; // adiciona a mensagem de erro na div
        div.classList.add('error-text'); // adiciona uma classe na div
        field.insertAdjacentElement('afterend', div); // adiciona a div depois do campo
    }
    
}

const validateForm = new ValidateForm(); // cria uma nova instância de ValidateForm