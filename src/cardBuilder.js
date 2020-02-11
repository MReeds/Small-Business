const cardBuilder = {
    cardTemplate: (card) => {
        return `
            <h1>Employee name: ${card.employee.name}</h1>
            <section>Employee department: ${card.department.department}</section>
            <section>Employee computer: ${card.type}</section>
        `
    }
}

export default cardBuilder