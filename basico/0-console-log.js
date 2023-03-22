//PS: log() é um método dentro do objeto console.

//1.Exibir um valor literal em string == cadeia de caracteres (texto, frase, palavra)
console.log('Nayana Loivos'); //quebra linha como padrão
console.log("Nayana Loivos");
console.log(`Nayana Loivos`);

//1.1.Exibir aspas em um valor string sem confundir motor do JS
console.log('Nayana "Loivos"');
console.log("Nayana 'Loivos'");
console.log(`Nayana "Loivos"`);//crases também são usadas para template string -> ${}
console.log(`Nayana 'Loivos'`);

//2.Exibir um valor literal em number
console.log(123); //inteiro
console.log(12.5); //real

//3.Exibir a concatenação de string e number
console.log("Estudo Javascript todo dia por", 6, "horas e eu sou uma desenvolvedora de software!");
console.log("Estudo Javascript todo dia por " + 6 + " horas e eu sou uma desenvolvedora de software!");
console.log(`Estudo Javascript todo dia por ${6} horas e eu sou uma desenvolvedora de software!`);