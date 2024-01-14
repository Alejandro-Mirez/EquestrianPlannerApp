export async function fetch_calendar(date) {
    const dateString = date.toISOString().split('T')[0]
    const result =  await fetch(`http://localhost:8000/calendar?date=${dateString}`, {method: 'GET',
    });
    return await result.json()
}

export async function add_activity(exercise_id, treatment_id, horse_id, day) {
    const dateString = day.toISOString().split('T')[0]
    await fetch('http://localhost:8000/calendar/item', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({exercise_id, treatment_id, horse_id, date:dateString})
    })
}

export async function delete_activity(id) {
    await fetch(`http://localhost:8000/calendar/item/${id}`, {
        method: 'DELETE'
    })
}

export async function update_activity(id, exercise_id, treatment_id, horse_id, day) {
    const dateString = day.toISOString().split('T')[0]
    await fetch(`http://localhost:8000/calendar/item/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, exercise_id, treatment_id, horse_id, date:dateString})
    })
}

export async function fetch_exercises() {
    const result =  await fetch('http://localhost:8000/exercises', {method: 'GET',
    });
    return await result.json()
}

export async function fetch_treatments() {
    const result =  await fetch('http://localhost:8000/treatments', {method: 'GET',
    });
    return await result.json()
}
