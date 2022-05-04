const reducer = (state = [], action) => {
    switch (action.type) {
        case "create":
            // return state.push(action.payload);
        case "delete":
            // const idx = state.indexOf(action.payload);
            // if (idx > -1) {
            //     return state.splice(idx, 1);
            // };
        default:
            return state;
    };
};

export default reducer;