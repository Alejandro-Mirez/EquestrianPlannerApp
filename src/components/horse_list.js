import {fetch_all_horses, add_horse, delete_horse} from "../service/horse_service";
import {useEffect, useState} from "react";
import {HorseName} from "./horse_name";

export default function HorseList({horses, updateHorses}) { //HorseList({horses})
    const [name, setName] = useState("");

    async function loadHorses(){
        const horses = await fetch_all_horses()
        updateHorses(horses)
    }


    useEffect(() => {
        loadHorses()
    }, []); //the effect will be run on initial render and on unmount the effect will be cleared with the return function was specified

    async function add(){
        await add_horse(name)
        await loadHorses()
    }

    async function del(horseId){
        await delete_horse(horseId)
        await loadHorses()
    }

    //TODO gdzie jest guzik usun
    return (
        <div>
            <ul>
                {horses.map(horse => <HorseName key={horse.id} horse={horse} reloadFunction={loadHorses}/>)}
            </ul>
            <input type="text" placeholder="Podaj imie kunia" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="button" onClick={() => add()}>Add horse</button>
        </div>
    )
};