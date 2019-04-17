import { combineReducers, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DataReducer, CourseReducer } from '../Reducers/HomeReducer';
import { Home } from '../../Pages/Home';
import Form from '../../Pages/Form';
import { Course } from "../../Pages/Course";
import { TextAction } from '../Actions/TextAction';

mapStateToHomeProps = (state) => {
    return { items: state.defaultData.items }
}
mapActionToCourseProps = (state) => {
    console.log("State props "+state.courseData.courses)
    return { courses: state.courseData.courses };
}
mapActionToFormProps = (dispatch) => {
    return bindActionCreators({ callAction: TextAction }, dispatch);
}



export let HomeComponent = connect(mapStateToHomeProps, null)(Home);
export let FormComponent = connect(null, mapActionToFormProps)(Form)
export let CourseComponent = connect(mapActionToCourseProps, null)(Course);
export default state = combineReducers({ defaultData: DataReducer, courseData: CourseReducer });