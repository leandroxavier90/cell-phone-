const calculate = (valorinicial,valoratual,tempo) =>{
    const juros = (valoratual - valorinicial)/ (valorinicial * tempo)
    console.log((juros * 100) .toFixed(0) + '%')
}
 calculate(1000,1200,10)