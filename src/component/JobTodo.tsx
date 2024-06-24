import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { JobTodo } from '../interface';

export default function Job() {
  const [name,setName]=useState<string>("");
  const [level,setLevel]=useState<string>("");
  const jobs: any = useSelector(state => {
    return state
  })
  

  const handleChangeNewName=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value
    setName(value);
    console.log(name);
  }
  const handleChangeNewLevel=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value
    setLevel(value);
    console.log(level);
  }
  const handleSave=()=>{
    
  }
  return (
    <>
    <div>
      <label htmlFor="">Tên công việc</label>
      <input type="text" onChange={handleChangeNewName}/>
      <select name="" id="" onChange={handleChangeNewLevel}>
        <option value="">Chọn cấp độ</option>
        <option value="veryImportant">Khẩn cấp</option>
        <option value="important">Quan trọng</option>
        <option value="normal">Bình thường</option>
        <option value="unImportant">Không quan trọng</option>
      </select>
      <button onClick={handleSave}>thêm công việc</button>
    </div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Trạng thái</th>
            <th>Mức độ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {jobs.jobReducer.map((job: JobTodo, index: number) => {
            return  <tr key={job.id}>
                      <td>{index + 1}</td>
                      <td>{job.name}</td>
                      <td><input type="checkbox" /> {job.status ? "Hoàn thành" : "Chưa hoàn thành"}</td>
                      <td>{job.level}</td>
                      <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                      </td>
                    </tr>
          })}
        </tbody>
      </table>
    </>
  );
}
