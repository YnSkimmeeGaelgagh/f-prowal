let prowal = [];
let earrooProwal = [0, 0];

const curLettyrStiagh = t => {
    t.target.classList.add("brooit");
    setTimeout(() => t.target.classList.remove("brooit"), 100);
    if (earrooProwal[1] < 5) {
        const l = t.target.textContent;
        const nahChilleen = document.getElementById(`killeen-${earrooProwal[0]}-${earrooProwal[1]}`);
        nahChilleen.textContent = l;
        prowal.push(l);
        earrooProwal[1]++;
    };
};
const gowLettyrMagh = t => {
    t.target.classList.add("brooit");
    setTimeout(() => t.target.classList.remove("brooit"), 100);
    if (earrooProwal[1] > 0) {
        earrooProwal[1]--;
        const roishKilleen = document.getElementById(`killeen-${earrooProwal[0]}-${earrooProwal[1]}`);
        roishKilleen.textContent = "";
        if (prowal.length) prowal.pop();
    };
};