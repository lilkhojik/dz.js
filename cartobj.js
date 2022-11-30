function cartobj() {
    let random = randomNumbers(1, 2, 3)
    const productList = {
        1: {
            "Burger": {
                info: "Cheese-Burger",
                price: 15000
            },
            "Free": {
                info: "Free-kartoshka",
                price: 7000
            },
            "cola": {
                info: "1.5L",
                price: 12000
            },
        },
        2: {
            "Bulochka": {
                info: "Tvorogli",
                price: 5000
            },
            water: {
                info: "Montella",
                price: 3000
            },
        },
        3: {
            "Osh": {
                info: "To'y-oshi",
                price: 45000
            },
            "choy": {
                info: "Qora-choy",
                price: 7000
            },
            "Non": {
                info: "Yopkan non",
                price: 4000
            },
            salat: {
                info: "Achiq-chuq",
                price: 8000
            }
        }
    }
    return productList[random]
}
function randomNumbers(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min)
}