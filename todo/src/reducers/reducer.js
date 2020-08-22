export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}, {
    item: 'Build some web apps',
    completed: true,
    id: 9298758911
}];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":         
            return [...state, action.payload];
        case "TOGGLE_COMPLETED":           
            return state.map(item =>{
                if (item.id === action.payload.id)
                {
                 return {...item, completed: !item.completed};
                }
                return item;
            }) 
        case "FILTER_TODOS":
            return state.filter(item => item.completed === false);
        default:
            return state;
    }
}
