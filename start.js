function triangle(t) {
    let str = "";
    let bar = " ";
    let zet = 0;
    for (i = 1; i <= t; i++){
        str = "";
        for(z = 1; z <= t - zet; z++){
            str += bar;
        }
        for(q = 0; q <= zet; q++){
        str += `${t}`;
        if(q >= 1) {
            str += `${t}`;
        }
    }
    zet += 1;
    console.log(`${str}`);
}
}
console.log(triangle(5));