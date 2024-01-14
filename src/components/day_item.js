import {fetch_calendar} from "../service/activity_service";
import {useEffect, useState} from "react";
import {Item} from "./item";

export default function DayItem({horse, day}) {
    // wyświetl item na dany dzień {day}
    // na podstawie listy koni {horses} policz, ile itemów powinno być w danym DayItem

    const [item, setItem] = useState({id_exercise:null, id_treatment:null});

    async function loadItem() {
        const calendar_day = await fetch_calendar(day)
        calendar_day.forEach((item) => {
            if(item.id_horse === horse.id) {
                setItem(item)
            }
        })
    }

    useEffect(() => {
        loadItem()
    }, []);

    return <Item horse={horse} plan_entity={item} day={day} refreshItem={loadItem}/>

}
