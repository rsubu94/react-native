

export let DataReducer = (state = { items: ["Pen", "Paper"] }, action) => {

    switch (action.type) {
        case 'DEFAULT_ACTION':
            state.items.push(action.item)
            return { items: [...new Set(state.items)] };
        //return { items: [...state.items] }
        default:
            return state;
    }
}

export let CourseReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case "COURSE_DATA":
            console.log("in Reducer")
            console.log(action.data)
            return { courses: action.data }
        default:
            return state;
    }
}

