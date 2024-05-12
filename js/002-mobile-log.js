function mobileLog() {
    let ol = document.getElementById('mlog')
    if (!ol) {
        ol = document.createElement('ol')
        ol.id = "mlog"
        ol.reversed = true;
        ol.style = `
            position:fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            height: 300px;
            color: white;
            background-color: rgba(0,0,0,.5);
            backdrop-filter: blur(10px);
            margin: 0;
            overflow-y: scroll;
        `
        document.body.append(ol);
    }
    const log = console.log.bind(console);
    console.log = (...msg) => {
        const li = document.createElement('li')
        li.innerHTML = msg.map(item => item.toString()).join(', ')
        ol.prepend(li)
        log(...msg)
    }
}