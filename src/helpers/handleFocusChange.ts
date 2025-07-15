export const handleFocusChangeWithAttr = (attr: string) => {
    const elToFocus = document.querySelector(`[${attr}]`);

    if (elToFocus instanceof HTMLElement) elToFocus.focus();
}

export const handleFocusChange = (id: string) => {
    const elToFocus = document.getElementById(id);
    
    if (elToFocus instanceof HTMLElement) elToFocus.focus();
}