export const createExpense = (expense) => {
    return (dispatch) => {
        dispatch({
            type: "create",
            payload: expense
        })
    };
};

export const deleteExpense = (expense) => {
    return (dispatch) => {
        dispatch({
            type: "delete",
            payload: expense
        })
    };
};