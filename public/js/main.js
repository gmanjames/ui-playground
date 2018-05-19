'use strict';

const Page = function()
{
    // Element to append gallery cards to
    const domElem = document.getElementById('gallery');

    // Cheat and use bootstrap's breakpoints...
    const BP = [

        352,
        469,
        618,
        767
    ];

    let previousBp;


    const setup = (bp) =>
    {
        previousBp = bp;
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

        const max = 300;
        const min = 75;
        const height = min + (Math.random() * (max - min));
        card.style.height = height + 'px';
        domElem.appendChild(card);
    };


    const justPassed = (bp) =>
    {
        if (bp != previousBp) {
            previousBp = bp;
            return true;
        }
        return false;
    };


    const getBreakpoint = () =>
    {
        let target;
        for (let size in BP)
        {
            let bp = BP[size];
            if (window.innerWidth >= bp) {
                target = bp;
            }
        }

        return target;
    };


    return {
        setup,
        addGalleryItem,
        getBreakpoint,
        justPassed
    };
};
