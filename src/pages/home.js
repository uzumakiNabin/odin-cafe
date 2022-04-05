import '../styles/home.css'

const home = () => {
    let component = document.createElement('div');
    component.classList.add('home-container');
    let quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '\"Once you wake up and smell the coffee, it\'s hard to go back to sleep.\"';
    component.appendChild(quote);
    return component;
}

export default home();