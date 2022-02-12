const escrapsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ESCRAP':
            return [
                ...state,
                {
                    name: action.name,
                    email: action.email,
                    address: action.address,
                    addressCity: action.ddressCity,
                    addressState: action.addressState,
                    zipCode: action.zipCode,
                    contactNumber: action.contactNumber,
                    availableTime: action.availableTime,
                    creationDate: action.creationDate,
                    category: action.category,
                    count: action.count,
                    message: action.message
                }
            ];
        default:
            return state;
    }
};

export default escrapsReducer;