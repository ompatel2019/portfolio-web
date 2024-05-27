document.addEventListener("DOMContentLoaded", function() {
    const text = "[Front-End] Developer";
    const typingTextElement = document.getElementById("typing-text");
    const cursorElement = document.getElementById("cursor");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        } else {
            setTimeout(() => {
                cursorElement.style.display = 'none';
            }, infinite); 
        }
    }

    type();
});


