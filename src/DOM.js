import cardBuilder from "./cardBuilder.js"

const entryContainer = document.querySelector(".employee")

const domOperations = {
    cardFactory: (employee, department, computer) => {

        let newCardObject = {
            employee: employee,
            department: department,
            computer: computer
        }
        return newCardObject
    },

    renderCardToDom: (data) => {
        entryContainer.innerHTML= "";
        data.forEach(card => {
            entryContainer.innerHTML +=
                cardBuilder.cardTemplate(card);
        });
    }
}

export default domOperations