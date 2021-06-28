
const createDomelement = (nowPage) => {
    const div = document.createElement('div')
    div.textContent = 'Hello World'
    return div
}

export default class DzNav extends HTMLElement {
    connectedCallback() {
        window.requestAnimationFrame(() => {
            this.appendChild(createDomelement())
        })
    }
}
