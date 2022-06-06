export const Form = (props) =>{
   

    return  <form>
        <input type="text" value={props.name}/>
        <button>submit</button>
    </form>
    
}

export default Form;
