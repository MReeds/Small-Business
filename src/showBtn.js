import domOperations from "./DOM.js"
import apiActions from "./data.js"

let showBtn = {
    buttonFunction: () => {
        let button = document.getElementById("show-btn")

        button.addEventListener("click", () => {
            apiActions.getEntries()
                .then(domOperations.renderCardToDom)

        })
    }
}

export default showBtn