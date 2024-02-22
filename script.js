let krestniJmeno = prompt("Zadejte křestní jméno bez diakritiky")
let prijmeni = prompt("Zadejte příjmení bez diakritiky")
const domain = "@fit.cvut.cz"
document.body.innerHTML = krestniJmeno.trimStart()
document.body.innerHTML = krestniJmeno.trimEnd()
document.body.innerHTML = prijmeni.trimStart()
document.body.innerHTML = prijmeni.trimEnd()
document.body.innerHTML = krestniJmeno.slice(0,3)
document.body.innerHTML = prijmeni.slice (0,5)
document.body.innerHTML = krestniJmeno.toLowerCase()
document.body.innerHTML = prijmeni.toLowerCase()

document.body.innerHTML = `Email: ${krestniJmeno}${prijmeni}${domain} `