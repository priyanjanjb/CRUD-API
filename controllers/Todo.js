const Todo = require("../model/Todo");

//only for get
// const getTodos = (req, res) => {
//     res.send("I am the get todos route");
//   };

//get and post

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  };
  
  
//   module.exports = {
//     getTodos,
//   };

  const createTodo = (req, res) => {
    const todo = new Todo({
      donorName: req.body.donorName,
      bloodCapacity:req.body.bloodCapacity,
      bloodType:req.body.bloodType
      
      
    });
  
    todo.save((err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    });
  };
//   module.exports = {
//     getTodos,
//     createTodo,
//   };
  
  const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
      { _id: req.params.todoID },
      {
        $set: {
          donorName: req.body.donorName,
          bloodCapacity:req.body.bloodCapacity,
          bloodType:req.body.bloodType
          
        },
      },
      { new: true },
      (err, Todo) => {
        if (err) {
          res.send(err);
        } else res.json(Todo);
      }
    );
  };

  
//   module.exports = {
//     getTodos,
//     createTodo,
//     updateTodo,
//   };


  const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
      .then(() => res.json({ message: "Todo Deleted" }))
      .catch((err) => res.send(err));
  };

  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
  
  
  
  