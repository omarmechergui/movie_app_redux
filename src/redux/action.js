import { ADDFILME, DELETEFILME, EDITFILME } from "./action_type"

export const addfilme = (film) => ({
    type: ADDFILME,
    payload: film
})

export const deletefilme = (id) => ({
    type: DELETEFILME,
    payload: id
})

export const editfilme = (id, data) => ({
    type: EDITFILME,
    payload: { id, data }
})