let screen = document.getElementById("screen-result");

function getData(ref) {
    let value = ref.value;
    screen.value += value;
}

function clear() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error syntaxis';
        setTimeout(() => {
            clear();
        }, 1500);
    }
}