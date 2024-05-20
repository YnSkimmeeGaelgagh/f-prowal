function trogDuillag () {
    function trogMoggyl () {
    const moggyl = trogAyrn({red: "div", ennym: "moggyl", taishbynys: "grid"});
        for (let i = 0; i < 6; i++) {
            const strane = trogAyrn({red: "div", ennym: `strane-${i}`, keint: ["strane"]});
            moggyl.append(strane);
            for (let j = 0; j < 5; j++) {
                strane.append(trogAyrn({red: "div", ennym: `killeen-${i}-${j}`, keint: ["killeen"]}))
            }
        };
        return moggyl;
    };
    const ogheryn = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["ENTER", "Ç", "C", "V", "B", "N", "M", "backspace"]
    ];
    function trogBoayrdOgher () {
        const boayrdOgher = trogAyrn({red: "div", ennym: "boayrd-ogher", taishbynys: "grid"});
        for (let i = 0; i < ogheryn.length; i++) {
            const linney = trogAyrn({red: "div", ennym: `linney-${i}`, keint: ["linney"]});
            for (ogher of ogheryn[i]) linney.append(trogAyrn({
                red: "div",
                ennym: `ogher-${ogher}`,
                keint: ["ogher", `${ogher != "ENTER" && ogher != "backspace" ? "lettyr" : ogher == "backspace" ? "material-symbols-outlined" : "ogher-elley"}`],
                cheuSthie: [ogher],
                click: ogher != "ENTER" && ogher != "backspace" ? t => curLettyrStiagh(t) : ogher == "backspace" ? t => gowLettyrMagh(t) : t => prowFockle(t)
            }));
            boayrdOgher.append(linney);
        };
        return boayrdOgher;
    };
    trogAyrn({paarant: true, red: "div", ennym: "ard-haagh", cheuSthie: [
        trogAyrn({red: "div", ennym: "fysseree", cheuSthie: ["fysseree"]}),
        trogAyrn({red: "div", ennym: "saagh-baare", cheuSthie: [
            trogAyrn({red: "div", ennym: "ennym-gamman", cheuSthie: ["focklan"]})
        ]}),
        trogAyrn({red: "div", ennym: "saagh-mean", cheuSthie: [
            trogMoggyl()
        ]}),
        trogAyrn({red: "div", ennym: "saagh-bun", cheuSthie: [
            trogBoayrdOgher()
        ]})
    ]});
}