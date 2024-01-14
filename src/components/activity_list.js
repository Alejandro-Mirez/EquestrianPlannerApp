import {fetch_exercises} from "../service/activity_service";
import {fetch_treatments} from "../service/activity_service";
import {useEffect, useState} from "react";

export default function ActivityList({item, saveExercise, saveTreatment}){
    const [exercises, setExercises] = useState([]);
    const [treatments, setTreatments] = useState([]);


    console.log(item)
    async function loadActivities(){
        const exercises = await fetch_exercises()
        const treatments = await fetch_treatments()
        setExercises(exercises)
        setTreatments(treatments)
    }

    useEffect(() => {
        loadActivities()
    }, []);


    return (
        <div>
            <select value={item.id_exercise} onChange={(event) => saveExercise(event.target.value)}>
                <option> BRAK </option>
                {exercises.map(exercise => <option key={exercise.id} value={exercise.id}> {exercise.exercise} </option>)}
            </select>
            <select value={item.id_treatment} onChange={(event) => saveTreatment(event.target.value)}>
                <option> BRAK </option>
                {treatments.map(treatment => <option key={treatment.id} value={treatment.id}> {treatment.treatment} </option>)}
            </select>
        </div>
    )
};