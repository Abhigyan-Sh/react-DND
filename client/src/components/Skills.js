import { memo } from 'react'
import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const Skills = memo(function Skills({ name, type, tool_url, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )
  return (
    <>
    {!isDropped ? (
      <div ref={drag} style={{ ...style, opacity }} data-testid="Skills">
        <img src= {tool_url} width='50px' height='50px'/>
        {name}
      </div>
    ) : (
      ''
    )}
    </>
  )
})
export default Skills