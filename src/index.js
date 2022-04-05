import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';
import logo from './images/logo.jpg';
import './styles/index.css';

//function to show/hide elements
const show = component => {
    component.classList.remove('hidden');
    component.classList.add('visible');
}

const hide = component => {
    component.classList.remove('visible');
    component.classList.add('hidden');
}

//function to select/unselect nav links
const select = component => {
    component.classList.add('selected');
}

const unselect = component => {
    component.classList.remove('selected');
}

//logo with name
const logoWithName = () => {
    let component = document.createElement('div');
    component.classList.add('logo-with-name');

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
    homeLink.classList.add('nav-link', 'selected');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', () => {
        select(homeLink);
        unselect(menuLink);
        unselect(contactLink);
        show(home);
        hide(menu);
        hide(contact);
    });

    //menu option
    let menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', () => {
        select(menuLink);
        unselect(contactLink);
        unselect(homeLink);
        show(menu);
        hide(contact);
        hide(home);
    });

    //contact option
    let contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', () => {
        select(contactLink);
        unselect(homeLink);
        unselect(menuLink);
        show(contact);
        hide(home);
        hide(menu);
    });

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

    show(home);
    component.appendChild(home);
    hide(menu);
    component.appendChild(menu);
    hide(contact);
    component.appendChild(contact);

    component.appendChild(footer());
    
    return component;
}

document.body.appendChild(container());