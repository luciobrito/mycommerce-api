//Máscara de moeda personalizada, não achei nenhuma na internet que fizesse oq eu queria :/
export function currencyMask(value : string){
    var regex = value.replace(',','')
        .replace(/\D/g,'')
        //Separar os números pela virgula
        .replace(/(\d)(\d{2})$/,"$1,$2")
        //Remover zeros a esquerda
        //.replace(/(0{3}\B|0{2}\B|0\B)/,'')
        /*Adicionar apenas 1 zero a esquerda
        .replace(/(^[^,]\d+$)$/,'0,$1')*/
    if(regex.length == 2) regex = '0' + regex
    if(regex.length == 1) regex = '00' + regex
    if(!regex.includes(',')) regex = '00' + regex
    if(regex[0] == '0' && regex[1] == '0') regex = regex.slice(1)
    if(regex[0] == '0' && regex[1] != '0' && regex[1] != ',') regex = regex.slice(1)

    switch(regex){
        case '':
        case '0':
        case '0,0':
        case '00':
        case '0000':
            regex = '0,00'
    }

    regex = regex.replace(',','')
        .replace(/\D/g,'')
        //Separar os números pela virgula
        .replace(/(\d)(\d{2})$/,"$1,$2")
    if(regex[0] == '0' && regex[1] == '0') regex = regex.slice(1)
    return regex
}
export function toBrazilianReal(value : Number){
    return value.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
}