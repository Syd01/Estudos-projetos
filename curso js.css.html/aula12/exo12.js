var agora =new Date()
var hora = agora.getHours()
if (hora<12){
    console.log(`Agora são exatamente ${hora} horas, Bom Dia!.`)
}else if (hora<=18){
    console.log(`Agora são exatamente ${hora} horas.Boa tarde!`)
}else{
    console.log(`Agora são exatamente ${hora} horas.Boa Noite!`)
}