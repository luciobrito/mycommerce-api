export  const getCurrentDate  = (d : Date) : string => {
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}
export const dataFutura = (date : string) : boolean =>{
    return new Date(date) > new Date()
}