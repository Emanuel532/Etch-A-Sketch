const createDivs = function (noDiv) {

    const container = document.querySelector('.container');
    container.style.width = 100*noDiv + 'px';
    container.style.height = 100*noDiv + 'px';

    noDiv *= noDiv;
    for(let i = 1; i <= noDiv; i++) {
        const content = document.createElement('div');
        content.classList.add('square');
        
        container.appendChild(content);
    }

}

createDivs(10);
