import React, { memo } from 'react'
import { useDrop } from 'react-dnd'

const Domain = memo(function Domain({ accepts, techs, onDrop, toolURL}) {
  const styles = {
    domainCover: 'bg-neutral-700 text-white p-2 w-80 min-h-full',
    eachSkill: '',
    toolImgCover: 'flex gap-2 flex-wrap'
  }
  /* console.log(accepts) */
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: accepts,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = isOver && canDrop
  let backgroundColor = 'bg-neutral-700'
  if (isActive) {
    backgroundColor = 'bg-emerald-500'
  } else if (canDrop) {
    backgroundColor = 'bg-rose-400'
  }
  /* console.log(backgroundColor)
  console.log(techs)
  console.log(toolURL) */
  return (
    <div ref={drop} className={styles.domainCover + backgroundColor} data-testid="dustbin">
      {isActive
        ? 'Release to drop'
        : `This domain accepts: ${accepts.join(', ')} tools`}
      <br/><br/>
      <div className={styles.eachSkill}>
        {techs && (
          <p><span className='text-rose-300'>Tools:</span> {techs.map((e, i) => {
            return (
            <span key= {i}>{e.name} </span>
            )})}
          </p>
        )}
        <div className={styles.toolImgCover}>
          {toolURL?.map((e, i) => {
            return (
            <img key={i} src= {e} width='50px' height='50px'/>
            )})}
        </div>
      </div>
    </div>
  )
})

export default Domain