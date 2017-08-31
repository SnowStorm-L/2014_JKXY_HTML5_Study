
var numDiv;
var worker = null;

window.onload = function() {

    numDiv = document.getElementById('numDiv');

    document.getElementById('start').onclick = startWorker;

    document.getElementById('stop').onclick = function() {

        if (worker) {
            worker.terminate();
            worker = null;
        }

    }


}

function startWorker() {
    if (worker) {
        return;
    }

    worker = new Worker('CountJS.js');
    worker.onmessage = function(p1) {
        numDiv.innerHTML = p1.data;
    }

}