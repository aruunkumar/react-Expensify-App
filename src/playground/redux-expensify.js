import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ( {description = '', note = '', amount = 0, createdDate = 0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdDate
    }
});

const RemoveExpense = ({id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
}) 

const expenseReducerDefaultState = []
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case ('ADD_EXPENSE'): 
            return [
                ...state,  //... is called spread operator and is used to append items to array
                action.expense]        
            // return state.concat(action.expense)  --> alternate syntax
        case ('REMOVE_EXPENSE'): 
            return state.filter((exp) => (exp.id !== action.expense.id));
        default: 
        return state; 

    }
};
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined  
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const store = createStore( 
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
}) 

const ItemOne = store.dispatch(addExpense({ description: 'Rent', amount: '1250'}));
store.dispatch(addExpense({ description: 'car', amount: '450'}));

store.dispatch(RemoveExpense({ id: ItemOne.expense.id}));

// const demoState = {
//     expenses : [{
//         id: 'sdasasdas',
//         description: 'Monthly rent',
//         note: 'detailed note about expense',
//         amount: 95000,
//         createdDate: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }

// };