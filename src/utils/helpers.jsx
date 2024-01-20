export function generateRandomArray(length) {
    const initialArray = Array.from({ length }, (_, i) => i);
    for (let i = initialArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [initialArray[i], initialArray[j]] = [initialArray[j], initialArray[i]];
    }

    return initialArray;
}

export function handlePageTransitionScreenRemoval() {
    const pageTransitionsScreen = document.querySelector('.page_transitions_screen');

    setTimeout(() => {
        pageTransitionsScreen.classList.remove('appear', 'first_time_load');
        pageTransitionsScreen.classList.add('hide');
    }, 500);
}

export function handlePageTransitionScreenArrival(safeToRemove) {
    document.querySelector('.page_transitions_screen').classList.remove('hide');
    document.querySelector('.page_transitions_screen').classList.add('appear');
    setTimeout(() => {
        safeToRemove();
    }, 1500);
}

export function createReadableCustomDateObj(date) {
    return {
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    };
}
