import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TodoInput extends Component {
  state = {};
  render() {
    const { item, handleChange, handleSubmit, editItem, disabled } = this.props;
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
          className="btn btn-block btn-primary mt-3"
          disabled={disabled}
        >
          {editItem ? "edit item" : "Add item"}
        </button>
        <ToastContainer />
      </form>
    );
  }
}

export default TodoInput;
