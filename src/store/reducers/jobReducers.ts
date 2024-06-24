// khởi tạo state 
import {JobTodo} from "../../interface";

const stateJob:JobTodo[]=[
  {
    id: 1,
    name: "mai",
    status: true,
    level: "high"
  },
  {
    id: 2,
    name: "duc",
    status: false,
    level: "low"
  }
];
// tạo hàm tính toán xử lí dựa vào các action 

const jobReducer = (state= stateJob, action : any) => {
    switch (action.type) {
        case "ADD":
            return [...state];
        case "DELETE":
            return [...state];
        case "UPDATE":
            return [...state];
        case "SEARCH":
            return [...state];
        case "SORT":
            return [...state];
        default:
            return state;
    }
}
export default jobReducer ;