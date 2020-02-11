const apiActions = {
    getEntries: () => {
        return fetch("http://localhost:8088/computers?_expand=employee&_expand=department")
            .then(resp => resp.json())
    }
}


export default apiActions