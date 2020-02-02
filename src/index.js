import _ from 'lodash';
import './style.css';
import img from './assets/pattern.jpg'



function component() {

    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', ' webpack'], '');

    return element;

}

document.body.appendChild(component());