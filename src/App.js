import { Component } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    itmes: [],
    id: uuid(),
    item: "",
    editItem: false,
    disabled: true,
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
      disabled: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.itmes, newItem];
    this.setState({
      itmes: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
    toast.dark("todo added successfully", {
      position: "top-right",
    });
  };

  clearList = () => {
    this.setState({
      itmes: [],
      disabled: true,
    });
    toast.error("Todo list deleted", {
      position: "top-right",
    });
  };

  handelDelete = (id) => {
    const filteredItems = this.state.itmes.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      itmes: filteredItems,
    });
    toast.error("Todo item deleted", {
      position: "top-right",
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.itmes.filter((item) => {
      return item.id !== id;
    });
    const selectedItems = this.state.itmes.find((item) => {
      return item.id === id;
    });
    this.setState({
      editItem: true,
      itmes: filteredItems,
      item: selectedItems.title,
      id: id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitilized text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.state.editItem}
              disabled={this.state.disabled}
            />
            <TodoList
              itmes={this.state.itmes}
              clearList={this.clearList}
              handelDelete={this.handelDelete}
              handleEdit={this.handleEdit}
              disabled={this.state.disabled}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
