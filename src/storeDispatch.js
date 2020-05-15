
class StoreDispatch {
    dispatch;
    globalState;

    setDispatch(dispatch){
        this.dispatch = dispatch;
    }

    setState(newState){
        this.globalState = newState;
    }
}

export default new StoreDispatch;
