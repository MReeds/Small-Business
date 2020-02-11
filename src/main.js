import showBtn from "./showBtn.js";
import apiActions from "./data.js";
import domOperations from "./DOM.js";

apiActions.getEntries()
    .then(domOperations.renderCardToDom);
showBtn.buttonFunction();