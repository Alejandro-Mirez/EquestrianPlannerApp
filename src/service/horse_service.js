export async function fetch_all_horses() {
    const result =  await fetch('http://localhost:8000/horses', {method: 'GET',
    });
    return await result.json()
}

export async function add_horse(name) {
    await fetch('http://localhost:8000/horse', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name})
    })
}

export async function delete_horse(id) {
    await fetch(`http://localhost:8000/horse/${id}`, {
        method: 'DELETE'
    })
}

export async function update_horse(id, name) {
    await fetch(`http://localhost:8000/horse/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name})
    })
}