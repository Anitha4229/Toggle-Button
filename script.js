document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    
    button.addEventListener('click', function() {
        if (container.classList.contains('active')) {
            container.classList.remove('active');
            button.innerHTML = 'Toggle';
            text.innerHTML = 'Click the button to change this text!';
        } else {
            container.classList.add('active');
            button.innerHTML = 'Reset';
            text.innerHTML = 'You have changed the state!';
        }
    });
});
