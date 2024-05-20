let rolleyFocklyn = [];

const fowFocklyn = (fockleyr) => {
    for (let f of Object.keys(fockleyr)) if (f.length == 5 && f != f.toUpperCase) rolleyFocklyn.push(f);
};
fowFocklyn(fockleyrZ);

console.log(rolleyFocklyn);