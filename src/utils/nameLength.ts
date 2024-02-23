export  const nameLength = (name : string, width: number) => {

    if (width < 400 && name.length > 32){
        return name.slice(0, 30) + '..'
    }
    if (width < 400){
        return name
    }
    if (width < 530 && name.length > 18){
        return name.slice(0, 15) + '..'
    }
    if (width < 1100 && name.length > 20){
        return name.slice(0, 18) + '..'
    }
    if (name.length > 23){
        return name.slice(0, 20) + '..'
    }

    return name
}