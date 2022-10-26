import {Input} from "../../components/Input"
import { useForm } from 'react-hook-form';
import {API} from "../../services/api"
import { useState } from "react";
// import {HeroPage} from "../pages/HeroPage"
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const UserPage = () => {
    const {register,handleSubmit} = useForm()
    const [listName,setListName] = useState([])
    const [idHeroStatus,setIdHeroStatus] = useState()

    const navigate = useNavigate()
  
    function listHeroName(data){
        const dataMod = data.name[0].toUpperCase() + data.name.substr(1)
        API.get(`/search/${dataMod}`).then((res) => {
            setListName(res.data.results)
            
        }).catch((err) => console.log(err))
    }

    function idHero(data){
        console.log(data)
        API.get(`/${data}`).then((res) => {
            
            console.log(res.data)
        }).catch((err) => console.log(err))
        // return navigate('/hero')
    }

console.log(listName)
return(
    <div>
        <form onSubmit={handleSubmit(listHeroName)}>
        <Input
            name="name"
            label="Busque um herói pelo nome"
            register={register}
        />
        <button>Buscar</button>
        </form>
        {
        listName === undefined ? <h2>Herói não encontrado</h2> :
        listName.map((item) => 
            (   <>
                    <h2>{item.name}</h2>
                    <img src={item.image.url}/>
                    <button onClick={() => idHero(item.id)}>Clique aqui para mais informações</button>

            </>
            )
        )}
       
        
    </div>
)


}