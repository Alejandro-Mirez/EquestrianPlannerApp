import HorseList from "./horse_list";
import Week from "./week";
import {useState} from "react";

export default function Table() {
    const day = new Date()
    const [horses, setHorses] = useState([]);

    return (
        <div>
            <table>
                <tc><HorseList horses={horses} updateHorses={setHorses}/></tc>
                <tc><Week horses={horses} day={day}/></tc>
            </table>
        </div>
    )
}

