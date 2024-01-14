import {useState} from "react";
import {update_horse} from "../service/horse_service";
import {Item} from "./item";

export function HorseName({horse, reloadFunction}){
    const [edited, setEdited] = useState(false)

    function openEditing() {
        setEdited(true)
    }

    function closeEditing() {
        setEdited(false)
    }

    //TODO: zrób aby guzik edytuj znikał w trakcie edytowania
    return <li> {!edited && horse.name} {edited && <EditName horse={horse} reloadFunction={reloadFunction} close={closeEditing} />} <button onClick={openEditing}> EDYTUJ </button> </li>
}


export function EditName({horse, reloadFunction, close}){
    const [new_name, updateName] = useState(horse.name)
    async function update() {
        await update_horse(horse.id, new_name)
        reloadFunction()
        close()
    }

    return (
        <div>
        <input type="text" value={new_name} placeholder="Wpisz nowe imię konia"
        onChange = { (e) => {updateName(e.target.value)}} />
        <button onClick={(e) => update()}> OK </button>
        </div>
    )
}

