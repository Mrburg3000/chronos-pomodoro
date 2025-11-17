let isRunning = false;

self.onmessage = function (event) {
    // receive full state from main thread
    const state = event.data;

    // if there's no active task, nothing to do
    if (!state || !state.activeTask) {
        return;
    }

    // prevent multiple concurrent loops
    if (isRunning) return;
    isRunning = true;

    const { activeTask, secondsRemaining } = state;

    const endDate = activeTask.startDate + secondsRemaining * 1000;

    function tick() {
        const now = Date.now();
        let countDownSeconds = Math.max(0, Math.ceil((endDate - now) / 1000));

        // post current remaining seconds
        self.postMessage(countDownSeconds);

        // stop when reach zero
        if (countDownSeconds <= 0) {
            isRunning = false;
            return;
        }

        setTimeout(tick, 1000);
    }

    tick();
};