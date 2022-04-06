import '../styles/home.css'

const home = () => {
    let component = document.createElement('div');
    component.classList.add('home-container');

    let quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '\"Once you wake up and smell the coffee, it\'s hard to go back to sleep.\"';
    component.appendChild(quote);

    let orderButton = document.createElement('button');
    orderButton.classList.add('order-button');
    orderButton.textContent = 'Order Now';
    component.appendChild(orderButton);
    
    return component;
}

export default home();