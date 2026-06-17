import axios from 'axios'

const API_URL = "https://nyuayaocooxjajjcioat.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55dWF5YW9jb294amFqamNpb2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYyMzIsImV4cCI6MjA5NzIxMjIzMn0.I9T4vhA55MYQF2U3xXSAEMS9-G0g7gErDDIWY1ch4wg"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, {
            headers,
            params: {
                select: "*",
                order: "created_at.desc",
            },
        })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        const response = await axios.delete(API_URL, {
            headers,
            params: {
                id: `eq.${id}`,
            },
        })
        return response.data
    },
}