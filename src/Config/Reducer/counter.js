// reducer

const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'Increment':
            return state++;
        
        case 'Decrement':
            return state--;
        
        case 'Reset':
            return state = 0;
        
           /*  default: 
            alert('please press a Button');  */
    }
}

export default counterReducer;