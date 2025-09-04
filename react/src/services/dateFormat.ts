export  const getCurrentDate  = (d : Date) : string => {
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}
export const dataFutura = (date : string) : boolean =>{
    return new Date(date) > new Date()
}
export  const dmyDate  = (d : Date) : string => {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}
export  const dmyDateHour  = (d : Date) : string => {

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes().toString().padStart(2,'0')}`;
}
export const brDate = (d : Date) : string =>
    d.toLocaleString('pt-br',{day:"2-digit", month:"long", year:"numeric",hour:"numeric", minute:"numeric"})
