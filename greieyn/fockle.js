let lettyryn = [];
let earrooLettyryn = {};
let fockle = "";

async function curFockle () {
    try {
        const myRequest = new Request("fockleNoa.txt");
        fockle = await fetch(myRequest).then(t => t.text()).then(t => t);
    } catch (marran) {
        alert("Unable to load word!");
    }
    lettyryn = fockle.split("");
    lettyryn.forEach(l => {
        if (!earrooLettyryn[l]) earrooLettyryn[l] = 1;
        else earrooLettyryn[l]++;
    });
    const screeynLaadey = document.getElementById("screeyn-laadey");
    screeynLaadey.remove();
}
curFockle();

function prowFockle (t) {
    t.target.classList.add("brooit");
    setTimeout(() => t.target.classList.remove("brooit"), 100);
    const aahoiagh = () => {
        setTimeout(() => {
            fysseree.classList.add("fioghey");
            fysseree.onanimationend = t => {
                t.target.style.visibility = "hidden";
                t.target.classList.remove("fioghey");
                strane.classList.remove("craa");
            };
        }, 2000);
    }
    const fysseree = document.getElementById("fysseree");
    const strane = document.getElementById(`strane-${earrooProwal[0]}`);
    if (prowal.length < 5) {
        fysseree.style.visibility = "visible";
        strane.classList.add("craa");
        fysseree.textContent = "Not enough letters!";
        aahoiagh();
        return;
    }
    const p = prowal.join("").toLowerCase();
    if (!rolleyFocklynQueigLetteryn.includes(p)) {
        fysseree.style.visibility = "visible";
        strane.classList.add("craa");
        fysseree.textContent = "Not in word list!";
        aahoiagh();
        return;
    }
    const boayrdOgher = document.getElementById("boayrd-ogher");
    boayrdOgher.style.pointerEvents = "none";
    let earrooKilleen = 0;
    function prowKiart () {
        if (p == fockle) {
            fysseree.style.visibility = "visible";
            fysseree.textContent = "Jeant dy mie!"; // cur kione er gamman
        }
        else {
            if (earrooProwal[0] == 5) {
                fysseree.style.visibility = "visible";
                fysseree.textContent = fockle;
                return;
            };
            prowal = [];
            earrooProwal[0]++;
            earrooProwal[1] = 0;
            earrooLettyryn = {};
            lettyryn.forEach(l => {
                if (!earrooLettyryn[l]) earrooLettyryn[l] = 1;
                else earrooLettyryn[l]++;
            });
            boayrdOgher.style.pointerEvents = "all";
        };
    }
    let letterynKiart = [false, false, false, false, false];
    function coontLettyryn () {
        prowal.forEach((l, i) => {
            if (l.toLowerCase() == fockle[i]) {
                earrooLettyryn[p[i]]--;
                letterynKiart[i] = true;
            };
        });
        prowal.forEach((l, i) => {
            if (fockle.includes(l.toLowerCase()) && earrooLettyryn[p[i]] > 0 && !letterynKiart[i]) {
                earrooLettyryn[p[i]]--;
                letterynKiart[i] = true;
            };
        });
    };
    coontLettyryn();
    function prowLettyr () {
        const killeen = document.getElementById(`killeen-${earrooProwal[0]}-${earrooKilleen}`);
        killeen.classList.add("chyndaa");
        const ogher = document.getElementById(`ogher-${prowal[earrooKilleen]}`);
        switch (true) {
            case (p[earrooKilleen] == fockle[earrooKilleen]):
                setTimeout(() => {
                    killeen.classList.add("kiart");
                    ogher.classList.remove("bunnys", "neu-chiart");
                    ogher.classList.add("kiart");
                    }, 200);
                break;
            case (letterynKiart[earrooKilleen]):
                setTimeout(() => {
                    killeen.classList.add("bunnys");
                    ogher.classList.remove("neu-chiart");
                    const hannah = ogher.classList.contains("kiart");
                    if (!hannah) ogher.classList.add("bunnys");
                }, 200);
                break;
            default:
                setTimeout(() => {
                    killeen.classList.add("neu-chiart");
                    const hannah = ogher.classList.contains("kiart") || ogher.classList.contains("bunnys");
                    if (!hannah) ogher.classList.add("neu-chiart");
                }, 200);
        };
        earrooKilleen++;
        if (earrooKilleen < 5) setTimeout(prowLettyr, 400);
        else setTimeout(prowKiart, 400);
    }
    prowLettyr();
}