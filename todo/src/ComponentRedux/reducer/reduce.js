
const intialStore =
{
     todo : [],
}
const reducer = (state=intialStore,action) =>{
      const {type,payload}=action
       switch (type) {
             case "ADD":
                  //  return  state.todo.push(action.payload)
                   return {...state,todo:[...state.todo,payload]}
                  
       
             default:
                  return  state
       }
      
      
      
}
 export default reducer




 
 