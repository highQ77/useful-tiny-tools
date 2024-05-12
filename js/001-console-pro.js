function consolePro() {
    // api design
    const log = console.log;
    const common = 'background:#000;text-shadow:0px 0px 1px white;padding:2px 4px;border:1px solid gray;border-radius:10px;'
    const timestamp = new Date(Date.now()).toISOString().replace('T', ' ').replace('Z', '')
    console.r = (...msg) => log(`%c[r]${timestamp}`, 'color:#DE3163;' + common, ...msg)
    console.o = (...msg) => log(`%c[o]${timestamp}`, 'color:#FF7F50;' + common, ...msg)
    console.y = (...msg) => log(`%c[y]${timestamp}`, 'color:#FFBF00;' + common, ...msg)
    console.g = (...msg) => log(`%c[g]${timestamp}`, 'color:#9FE2BF;' + common, ...msg)
    console.b = (...msg) => log(`%c[b]${timestamp}`, 'color:#6495ED;' + common, ...msg)
    console.p = (...msg) => log(`%c[p]${timestamp}`, 'color:#CCCCFF;' + common, ...msg)

    // api 
    console.log('API demo, 不同功能用不同顏色表示, 端看開發人員如何分類')
    console.r('console.r("red")')
    console.o('console.o("orange")')
    console.y('console.y("yellow")')
    console.g('console.g("green")')
    console.b('console.b("blue")')
    console.p('console.p("purple")')
    console.r('red 第 2 次')
    console.r('red 第 3 次')
    console.log('請於上方 Filter 處輸入[r]查看篩選結果')
}
