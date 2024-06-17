let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"] 

console.log(companies)

let a = companies.shift()

console.log(companies)

let b = companies.splice(1, 1, "Ola")

console.log(companies)

let c = companies.push("Amazon")

console.log(companies)