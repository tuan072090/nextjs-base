
const Logger = (fun) => (state, action) => {

    console.log("%cType: "+action.type, 'color: #d32f2f', "Data: "+action?.data);

    return fun(state, action)
};

export {Logger}
