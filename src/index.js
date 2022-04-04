import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';
import logo from './images/logo.jpg';

//logo with name
const logoWithName = () => {
    let component = document.createElement('div');
    let logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.classList.add('img', 'main-logo-image');
    let name = document.createElement('h2');
    name.classList.add('main-logo-name');
    name.textContent = 'Coffee Shop';
    component.appendChild(logoImg);
    component.appendChild(name);
    return component;
}

//navigation links
const navLinks = () => {
    let component = document.createElement('div');
    component.classList.add('nav-links')

    //home option
    let homeLink = document.createElement('a');
    homeLink.classList.add('nav-link');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', () => alert('home clicked'));

    //menu option
    let menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => alert('menu clicked'));

    //contact option
    let contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', () => alert('contact clicked'));

    component.appendChild(homeLink);
    component.appendChild(menuLink);
    component.appendChild(contactLink);
    return component;
}

//nav bar
const navBar = () => {
    let component = document.createElement('nav');
    component.classList.add('navbar');
    component.appendChild(logoWithName());
    component.appendChild(navLinks());
    return component;
}

//generate social link icon
const generateSocial = (name, link) => {
    let component = document.createElement('a');
    component.href = link;
    let componentLogo = document.createElement('i');
    componentLogo.classList.add('fa-solid', `fa-${name}`);
    component.appendChild(componentLogo);
    return component;
}

//social links
const socialLinks = () => {
    let component = document.createElement('div');
    component.classList.add('social-links');
    component.appendChild(generateSocial('facebook', '#'));
    component.appendChild(generateSocial('instagram', '#'));
    component.appendChild(generateSocial('twitter', '#'));
    component.appendChild(generateSocial('youtube', '#'));
    return component;
}

//copyright information
const copyrightInfo = () => {
    let component = document.createElement('p');
    component.classList.add('copyright-info', 'footer-text');
    let year = '2021';
    component.innerHTML = `\u00A9 ${year} Coffee Shop - All Rights Reserved`;
    return component;
}

//footer
const footer = () => {
    let component = document.createElement('footer');
    let connectText = document.createElement('p');
    connectText.classList.add('connect-text', 'footer-text');
    connectText.textContent = 'connect with us!';
    component.classList.add('footer');
    component.appendChild(socialLinks());
    component.appendChild(connectText);
    component.appendChild(copyrightInfo());
    return component;
}

const container = () => {
    const component = document.createElement('div');
    component.classList.add('container');
    component.appendChild(navBar());

    component.appendChild(home);
    component.appendChild(menu);
    component.appendChild(contact);

    component.appendChild(footer());
    
    return component;
}

document.body.appendChild(container());