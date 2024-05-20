function trogAyrn (mynphointyn) {
    const ayrn = document.createElement(mynphointyn.red);
    if (mynphointyn.leayrid) ayrn.style.visibility = mynphointyn.leayrid;
    if (mynphointyn.taishbynys) ayrn.style.display = mynphointyn.taishbynys;
    if (mynphointyn.ennym) ayrn.id = mynphointyn.ennym;
    if (mynphointyn.keint) mynphointyn.keint.forEach(k => ayrn.classList.add(k));
    if (mynphointyn.click) ayrn.onclick = mynphointyn.click;
    if (mynphointyn.caghlaa) ayrn.onchange = mynphointyn.caghlaa;
    if (mynphointyn.baare) ayrn.style.top = mynphointyn.baare;
    if (mynphointyn.hoshtal) ayrn.style.left = mynphointyn.hoshtal;
    if (mynphointyn.yesh) ayrn.style.right = mynphointyn.yesh;
    if (mynphointyn.cheugheyHene) ayrn.style.alignSelf = mynphointyn.cheugheyHene;
    if (mynphointyn.sorch) {
        ayrn.type = mynphointyn.sorch;
        if (mynphointyn.sorch == "checkbox") ayrn.checked = mynphointyn.cowrit;
    };
    switch (mynphointyn.red) {
        case "img":
            ayrn.src = mynphointyn.cheuSthie ? mynphointyn.cheuSthie : "";
            break;
        case "button":
            ayrn.textContent = mynphointyn.cheuSthie;
            break;
        default:
            if (mynphointyn.cheuSthie) mynphointyn.cheuSthie.forEach(a => ayrn.append(a));
    }
    if (mynphointyn.paarant) document.body.append(ayrn);
    else return ayrn;
};