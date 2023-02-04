import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TodoInput extends Component {
  state = {};
  render() {
    const { item, handleChange, handleSubmit, handleEdit, disabled } =
      this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control text-capitalize mt-3"
            placeholder="Add a todo item"
            value={item}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary mt-3 w-100"
          disabled={disabled}
        >
          {handleEdit ? "Edit item" : "Add item"}
        </button>
        <ToastContainer />
      </form>
    );
  }
}

export default TodoInput;
