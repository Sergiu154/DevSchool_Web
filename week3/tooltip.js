const tooltipElements = document.querySelectorAll('[data-tooltip]');
console.log(tooltipElements);


// event

// mouse events - click ,mouse over ,mouse out


// Form - onSubmit , onChange, on Focus

// keyboard events - keypress, keyup,keydown,

tooltipElements.forEach(element => {

    element.addEventListener('mouseover', (event) => {
        console.log(event);
        const tooltip = document.createElement('div');
        tooltip.textContent = element.dataset.tooltip;
        tooltip.id = "tooltip";
        tooltip.style.background = 'grey';
        tooltip.style.padding = '4px 8px';
        tooltip.style.position = 'absolute';
        const elementBounds = element.getBoundingClientRect();
        document.body.appendChild(tooltip);
        tooltip.style.top = elementBounds.top + +window.scrollY - tooltip.offsetHeight + 'px';
        tooltip.style.left = elementBounds.left + (tooltip.offsetWidth - elementBounds.width) / 2 - 10 + 'px';


    })
    element.addEventListener('mouseout', (event) => {

        const tooltip = document.getElementById('tooltip');
        tooltip.remove();


    })
})