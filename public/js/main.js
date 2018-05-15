'use strict';

const Page = function()
{
    const domElem = document.getElementById('gallery');


    const setup = () =>
    {


    };


    const addGalleryItem = () =>
    {
        const card    = document.createElement('div');
        const cardImg = document.createElement('div');
        const cardInn = document.createElement('div');

        card.appendChild(cardImg);
        card.appendChild(cardInn);

        const p = document.createElement('p');
        p.appendChild(document.createTextNode('foo!'));

        cardInn.appendChild(p);

        // finally add to gallery (and register evt?)
        card.classList.add('card');
        domElem.appendChild(card);
    };

    return {
        setup,
        addGalleryItem
    };
};
