import '../styles/menu.css';

//generate menu items from given item name, its description and prize
const menuItemGenerator = (name, desc, prize) => {
    let component = document.createElement('div');
    component.classList.add('menu-item');

    let nameElement = document.createElement('p');
    nameElement.classList.add('menu-name');
    nameElement.textContent = name;

    let descElement = document.createElement('p');
    descElement.classList.add('menu-desc');
    descElement.textContent = desc;

    let prizeElement = document.createElement('p');
    prizeElement.classList.add('menu-prize');
    prizeElement.textContent = `Rs. ${prize}`;

    component.appendChild(nameElement);
    component.appendChild(descElement);
    component.appendChild(prizeElement);

    return component;
}

//menu items grouped under espresso
const espresso = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'espresso';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Espresso', 'A very strong coffee brewed rapidly an ounce at a time.', 399.88));
    component.appendChild(menuItemGenerator('Cappuccino', 'Espresso with foamed milk', 524.31));
    component.appendChild(menuItemGenerator('Cortado', 'Espresso with foamed milk', 492.90));
    component.appendChild(menuItemGenerator('Macchiato', 'Espresso marked with foam', 462.70));
    component.appendChild(menuItemGenerator('Americano', 'Espresso and hot water', 407.13));
    component.appendChild(menuItemGenerator('Cold Brew', 'Cold brewed coffee steeped over 18 hours', 399.88));
    component.appendChild(menuItemGenerator('Cafe Au Lait', 'Special blend with steamed milk', 369.68));
    component.appendChild(menuItemGenerator('Latte', 'Espresso with steamed milk', 524.32));
    component.appendChild(menuItemGenerator('Maple Leaf Latte', 'Espresso, house made maple syrup and steamed milk', 584.72));
    component.appendChild(menuItemGenerator('Chaga Latte', 'Espresso, chaga mushroom powder with a dash of cocoa and cinnamon and steamed milk', 813.05));
    component.appendChild(menuItemGenerator('Mexican Mocha', 'Espresso with Ibarra chocolate and steamed milk', 584.72));
    component.appendChild(menuItemGenerator('Mocha', 'Espresso with cocoa and steamed milk', 584.72));

    return component;
}

//menu items grouped under chocolate
const chocolate = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'chocolate & tea';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Hot Tea', 'Selection of over 10 carefully selected loose leaf teas', 399.88));
    component.appendChild(menuItemGenerator('Iced Tea (Black, Fiji Green, or Cranberry Hibiscus)', '', 369.68));
    component.appendChild(menuItemGenerator('Matcha Latte', 'Matcha tea with steamed milk', 555.73));
    component.appendChild(menuItemGenerator('Chai Latte', 'Cloud Chai with steamed milk', 524.32));
    component.appendChild(menuItemGenerator('London Fog', 'Earl Grey tea sweetened with vanilla, and steamed milk', 584.72));
    component.appendChild(menuItemGenerator('Golden Milk', 'Turmeric, ginger, and warming spices steamed together with oat milk and a touch of vanilla', 635.46));
    component.appendChild(menuItemGenerator('Hot Chocolate', 'Cocoa with steamed milk', 431.29));
    component.appendChild(menuItemGenerator('Italian Soda', '', 492.9));

    return component;
}


//menu items grouped under smoothies
const smoothies = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'smoothies';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Berry Antioxidant', 'Strawberries, raspberries, blueberries, chia seeds, apple juice', 800.97));
    component.appendChild(menuItemGenerator('Clean Green', 'Kale, spinach, banana, pineapple, spirulina, chia seeds, oat milk', 800.97));
    component.appendChild(menuItemGenerator('Tropical Energy', 'Banana, mango, pineapple, coconut, coconut milk, pea protein', 800.97));
    component.appendChild(menuItemGenerator('Strawberry Banana', 'Strawberry, banana, oat milk', 800.97));

    return component;
}


//breakfast
const breakfast = () => {
    let component = document.createElement('div');
    component.classList.add('menu-group');

    let header = document.createElement('h3');
    header.classList.add('menu-group-header');
    header.textContent = 'breakfast';

    component.appendChild(header);
    component.appendChild(menuItemGenerator('Breakfast Burritos', 'choice of potato or meat options with salsa, egg and cheese', 524.32));
    component.appendChild(menuItemGenerator('Daily Quiche', 'daily seasonal additions, creamy egg filling, butter crust', 677.74));
    component.appendChild(menuItemGenerator('Breakfast Sandwiches', 
        'english muffin, bagel, croissant, or gluten-free bread, choices include egg/vegan egg, cheese/vegan cheese, meat/vegan sausage, and multiple vegetable options.',
        '474.78 +'));

    return component;
}

//menu page
const menu = () => {
    let component = document.createElement('div');
    component.classList.add('menu-container');
    component.appendChild(espresso());
    component.appendChild(chocolate());
    component.appendChild(smoothies());
    component.appendChild(breakfast());

    return component;
}

export default menu();