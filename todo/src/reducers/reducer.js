export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}, {
    item: 'Build some web apps',
    completed: false,
    id: 9298758911
}];

export const reducer = (state, action) => {
    switch (action.type) {
       // case ADD_TODO: 
            //return {...state, action.payload}
        default:
            return state;
    }
}