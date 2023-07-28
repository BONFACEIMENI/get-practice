const randomNum = num => Math.floor(Math.random()*num)

const objectMessage = {
    names: ['Bonface', 'Imeni', 'Phenny', 'Cherop', 'Joash', 'Ryan'],
    occupations: ['Software Engineer', 'Editor', 'Doctor', 'Architecture','Pilot', 'President'],
    country: ['Kenyan', 'Brits', 'China', 'USA', 'Germany', 'Singapore']
}

let objMess = []

for(let pro in objectMessage){
    switch(pro){
        case 'names':
            objMess.push(`Your name is: "${objectMessage[pro][randomNum(objectMessage[pro].length)]}".`);
            break;
        case 'occupations':
            objMess.push(`And your occupation is: "${objectMessage[pro][randomNum(objectMessage[pro].length)]}".`);
            break;
        case 'country':
            objMess.push(`and to add on your country is: "${objectMessage[pro][randomNum(objectMessage[pro].length)]}".`);
            break;
        default:
            objMess.push("There is no info anymore")
    }

}

let fullMessage = objMess.join(" \n ")
console.log(fullMessage)

