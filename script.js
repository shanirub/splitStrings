function solution(str){
    if ((str.length % 2 !== 0)) {
        str = str.padEnd(str.length + 1, '_')  
    }
    str = str.match(/.{2}/g)

    return str
}
