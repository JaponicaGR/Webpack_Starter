import _ from 'lodash';
import './style.css';


function component() {

    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', ' Manos'], '');

    element.onclick = printMe.bind(null, 'Hello !!!');

    return element;

}

document.body.appendChild(component());