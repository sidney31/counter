let count = 0;
document.addEventListener('keypress', function(event) {
    if (event.key == '+') {
        count++;
        console.log(count)
        document.getElementById("counter").innerHTML = 'Счётчик нажатий: ' + count;
    }
});