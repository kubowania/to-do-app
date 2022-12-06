import { useState } from 'react'
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import ShowModal from './Modal'

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(null)

  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'DELETE',
      })
      if (response.status === 200) {
        getData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />
      </div>
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete" onClick={deleteItem}>
          DELETE
        </button>
      </div>
      {showModal && (
        <ShowModal
          mode={'edit'}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  )
}

export default ListItem
