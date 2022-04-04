import cafeimg from '../images/cafeImage.jpg';

//location information
const locationInfo = () => {
    let component = document.createElement('div');
    component.classList.add('location-info');

    let cafeName = document.createElement('h3');
    cafeName.classList.add('contact-header')
    cafeName.textContent = 'Coffee Shop';

    let address = document.createElement('p');
    address.classList.add('contact-details');
    address.textContent = '110117th St NW Washington, DC 20036';

    let phone = document.createElement('p');
    phone.classList.add('contact-details', 'contact-link');
    phone.textContent = '(123) 456-7890';

    let email = document.createElement('p');
    email.classList.add('contact-details', 'contact-link');
    email.textContent = 'info@coffeeshop.com';

    component.appendChild(cafeName);
    component.appendChild(address);
    component.appendChild(phone);
    component.appendChild(email);

    return component;
}

//hours open information
const hoursOpen = () => {
    let component = document.createElement('div');
    component.classList.add('hours-open');

    let title = document.createElement('h3');
    title.classList.add('contact-header');
    title.textContent = 'Hours';

    let content = document.createElement('p');
    content.classList.add('contact-details');
    content.textContent = 'Monday - Friday: 7am - 3pm \n Saturday - Sunday: Closed';

    component.appendChild(title);
    component.appendChild(content);

    return component;
}

//contact info and hours open info combined
const contactInfo = () => {
    let component = document.createElement('div');
    component.classList.add('contact-info');

    component.appendChild(locationInfo());
    component.appendChild(hoursOpen());

    let contactButton = document.createElement('button');
    contactButton.classList.add('btn', 'contact-button');
    contactButton.textContent = 'Contact Us';

    component.appendChild(contactButton);

    return component;
}

//cafe image
const cafeImage = () => {
    let component = document.createElement('img');
    component.classList.add('cafe-image');
    component.src = cafeimg;
    return component;
}

const contact = () => {
    const component = document.createElement('div');
    component.classList.add('contact-container');

    component.appendChild(contactInfo());
    component.appendChild(cafeImage());

    return component;
}

export default contact();