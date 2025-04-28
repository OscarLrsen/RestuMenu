class Dish {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
    }
    display() {
        return `${this.name} - $${this.price}: ${this.description}`;
    }
}

//Subklassen förrätt
class Precourse extends Dish {
    constructor(name, price, description, spiceLevel) {
        super(name, price, description);
        this.spiceLevel = spiceLevel;
    }
    display() {
        return `${super.display()} (Spice Level: ${this.spiceLevel})`;
    }
}




class Dessert extends Dish {
    constructor(name, price, description, sweetnessLevel) {
        super(name, price, description);
        this.sweetnessLevel = sweetnessLevel;
    }
    display() {
        return `${super.display()} (Sweetness Level: ${this.sweetnessLevel})`;
    }
}

class MainCourse extends Dish {
    constructor(name, price, description, vegetarian) {
        super(name, price, description);
        this.vegetarian = vegetarian;
    }
    display() {
        return `${super.display()} (vegetarian: ${this.vegetarian ? 'Yes' : 'No'})`;
    }
}

async function fetchDishes() {
    try {
    // Fetch data from the API
    const response = await fetch('https:localhost:3000/dishes'); // Replace with your API URL
    const data = await response.json();
    console.log(data);  
    }catch (error){
        console.error('Error fetching dishes:', error);
    }
}