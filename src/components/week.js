import {useEffect, useState} from "react";
import DayItem from "./day_item";

export default function Week({horses, day}) {
    const [week, setWeek] = useState([])

    // DONE policzyc dla danego dnia caly tydzien
    function getWeek(){
        let today = new Date
        let week = []

        for (let i = 1; i <= 7; i++) {
            // który dzisiaj (20) - numer dnia tygodnia (5) + i (bo inaczej zaczniemy od niedzieli)
            // i tak, dla piątku 20.10.2023r. first = 16
            // z każdą kolejną iteracją "first" przestaje być pierwszym a staje się kolejnym dniem tygodnia
            let first = today.getDate() - today.getDay() + i
            // zmieniamy otrzymaną cyfrę (tu: 16) w format daty, na koniec usuwamy niepotrzebne koordynaty (zostawiamy rok-miesiąc-dzień)
            // w naszym przykładzie, day = 2023-10-16
            let day = new Date(today.setDate(first)).toISOString().slice(0, 10)
            week.push(day)
        }
        return week
    }

    useEffect(() => {
        getWeek()
    }, []);

    return (
        horses.map(horse => <DayItem day={day} horse={horse} />)
    )

}