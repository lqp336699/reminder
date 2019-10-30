import { ADD_REMINDER,DELETE_REMINDER } from "../constants";

const reminder = (action)=>{
    return {
        text: action.text,
        id: Math.random()
    }
};

const reminders = (state=[],action={})=>{
    switch (action.type) {
        case ADD_REMINDER:
            return [
                ...state,
                reminder(action)
            ];
        case DELETE_REMINDER :
            return state.filter(reminder => reminder.id !== action.id);
        default: return state;
    }
};

export default reminders;