import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeleteModal.css";

function DeleteModal({ title, text, onDelete, onDeleteSuccess }) {
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  return (
    <div className="delete-modal-container">
      <h3 className="delete-modal-title">{title}</h3>

      <p className="delete-modal-text">{text}</p>

      <div className="delete-modal-buttons-div">
        <button
          className="delete-modal-button delete-modal-cancel-button"
          onClick={closeModal}
        >
          <i className="fa-solid fa-xmark fa-sm" /> Cancel
        </button>
        <button
          className="delete-modal-button delete-modal-delete-button"
          onClick={() =>
            dispatch(onDelete())
              .then(() => {
                if (onDeleteSuccess) onDeleteSuccess();
                closeModal();
              })
              .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                  alert(data.errors);
                }
              })
          }
        >
          <i className="fa-solid fa-trash fa-sm" /> Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
