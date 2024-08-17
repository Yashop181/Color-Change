document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const colorButton = document.getElementById('colorButton');
    const colorPreview = document.getElementById('colorPreview');

    colorButton.addEventListener('click', () => {
        const selectedColor = colorPicker.value;
        colorPreview.style.backgroundColor = selectedColor;
        colorButton.style.backgroundColor = selectedColor;
        colorButton.style.color = selectedColor === '#000000' ? '#FFFFFF' : '#000000'; 
    });
});
