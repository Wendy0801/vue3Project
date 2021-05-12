import {reactive} from "vue"

export default function addStudent(state) {
    let state2 = reactive({
        stud2: [{id: '', name: ''}]
    })

    function addStud(){
        const  stu = Object.assign({}, state2.stud2);
        state.stud.push(stu);
    }

    return{state2, addStud}
}

