let krestniJmeno = prompt("Zadejte křestní jméno bez diakritiky")
let prijmeni = prompt("Zadejte příjmení bez diakritiky")
const domain = "@fit.cvut.cz"


document.body.innerHTML = `email:${prijmeni.trim().slice(0,5).toLowerCase()}${krestniJmeno.trim().slice(0,3).toLowerCase()}${domain}`