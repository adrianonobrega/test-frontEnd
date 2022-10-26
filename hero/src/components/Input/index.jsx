export const Input = ({label,register,name}) => {
    return(
        <div>
           
        <label>{label}</label>  
        <input {...register(name)}></input>
        </div>
       
    )
}