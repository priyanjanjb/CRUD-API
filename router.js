const router = require("express").Router();
const { getTodos } = require("./controllers/Todo");
const { createTodo } = require("./controllers/Todo");
const {  updateTodo } = require("./controllers/Todo");
const {  deleteTodo} = require("./controllers/Todo");



router.get("/todos", getTodos);

router.post("/todos", createTodo);

router.put("/todos/:todoID", updateTodo);

router.delete("/todos/:todoID", deleteTodo);



router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});



module.exports = router;
