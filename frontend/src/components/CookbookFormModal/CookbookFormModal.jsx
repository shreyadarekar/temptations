import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { postCookbook, putCookbook } from "../../store/cookbooks";
import "./CookbookFormModal.css";

function CookbookFormModal({ cookbookId, inTitle = "" }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(inTitle);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    return dispatch(
      !cookbookId ? postCookbook({ title }) : putCookbook(cookbookId, { title })
    )
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <div className="cookbook-modal-container">
      <form className="cookbook-modal-form" onSubmit={handleSubmit}>
        <h2 className="cookbook-modal-heading">
          {!cookbookId ? `New` : `Edit`} Cookbook
        </h2>
        <label className="cookbook-modal-form-input">
          <span>Title</span>
          <input
            type="text"
            placeholder="Enter a name for the cookbook"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        {errors.message && <p className="error">{errors.message}</p>}

        <button className="cookbook-modal-button" type="submit">
          {cookbookId ? "Update cookbook" : "Add cookbook"}
        </button>
      </form>
    </div>
  );
}

export default CookbookFormModal;
