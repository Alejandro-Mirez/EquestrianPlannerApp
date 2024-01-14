import ActivityList from "./activity_list";
import {add_activity, update_activity} from "../service/activity_service";
import {useState} from "react";

export function Item({horse, plan_entity, day, refreshItem}) {

    async function send_to_backend(id_exercise, id_treatment) {
        const item = plan_entity

        if (id_exercise) {
            item.id_exercise = id_exercise
        }

        if (id_treatment) {
            item.id_treatment = id_treatment
        }

        if (item.id) {
            await update_activity(item.id, item.id_exercise, item.id_treatment, horse.id, day)
        } else {
            await add_activity(item.id_exercise, item.id_treatment, horse.id, day)
        }

        refreshItem()
    }

    function saveExercise(id) {
        send_to_backend(id, null)
    }

    function saveTreatment(id) {
        send_to_backend(null, id)
    }

    return (
        <div>
            {horse.name}: <ActivityList item={plan_entity} saveExercise={saveExercise} saveTreatment={saveTreatment}/>
        </div>
    )

}
