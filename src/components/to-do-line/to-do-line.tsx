import './to-do-line.scss'

export interface ToDoLineProps {
  id: number
  isCompleted: boolean
  item: string
  onChange: (e: any)=>void
} 

export default function ToDoLine({id,item,isCompleted, onChange}:ToDoLineProps) { 
  const inputId=id.toString()
  return (   
    <div className='checkbox'>
      <input type="checkbox" id={inputId} className='checkbox-input' onChange={onChange} checked={isCompleted}/> 
      <label htmlFor={inputId} className={isCompleted ? 'completed' : ''}>{item}</label> 
    </div>
  );
}