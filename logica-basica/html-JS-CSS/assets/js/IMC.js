    function app() {
        const form = document.querySelector('#form');
    
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const inputPeso = e.target.querySelector('#peso');        
            const inputAltura = e.target.querySelector('#altura');             
            const peso = Number(inputPeso.value);
            const altura = Number(inputAltura.value);

            if(!peso) {
                setResultado(peso, altura, 'Peso Inválido!', false);
                
            }
            if(!altura) {
                setResultado(peso, altura, 'Altura inválida!', false);
                return;
            }

            const imc = getImc(peso, altura);
            const nivelImc = getNivelImc(imc);

            const msg = `Seu IMC é ${imc} e você tem ${nivelImc}.`

            setResultado(peso, altura, msg, true);
            console.log(imc, nivelImc);
    })
    }    

    function getNivelImc(imc) {
        if(imc >= 40) return 'Obesidade grau 3';
        if(imc >= 35) return 'Obesidade grau 2';
        if(imc >= 30) return 'Obesidade grau 1';
        if(imc >= 25) return 'Sobrepeso';        
        if(imc >= 18.5) return 'Peso normal';    
        if(imc < 18.5)  return 'Peso abaixo do normal';       
    }

    function getImc(peso, altura) {
        const calculoIMC =  peso / (altura ** 2);
        return calculoIMC.toFixed(2);
    }

    function criarParagrafo() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(peso, altura, msg, isValid) { 
        const exibePeso = document.querySelector('.exibePeso');
        const exibeAltura = document.querySelector('.exibeAltura');
        const mensagemIMC = document.querySelector('.msgResultado');       

        exibePeso.innerHTML = '';
        exibeAltura.innerHTML = '';
        
        const p = criarParagrafo();
        if(isValid) {
            p.classList.add('paragrafo-resultado');
            console.log(p)
        } else {
            p.classList.add('bad');
            
        }

        p.innerHTML = msg;
        mensagemIMC.appendChild(p);

        exibePeso.innerHTML = `Peso: ${peso}`;
        exibeAltura.innerHTML = `Altura: ${altura}`;
    }

    app();