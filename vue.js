Vue.component("task", {
  template: "<li><slot></slot></li>"
});

new Vue({
  el: "#root",
  data: {
    message: "Hello world",
    newName: "",
    names: ["Joe", "Mary", "Jane", "Jack"],
    title: "Set dynamically from javascript",
    className: "color-red",
    isLoading: false,
    tasks: [
      { description: "Go to the store", completed: true },
      { description: "Go to the house", completed: false },
      { description: "Go to the office", completed: true },
      { description: "Go to the pharmacy", completed: false }
    ]
  },
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = "";
    },
    toggleClass() {
      this.isLoading = !this.isLoading;
    },
    modifyTasks({ task }) {
      this.tasks.find((taskObject, index) => {
        if (taskObject === task) {
          return (this.tasks[index].completed = !this.tasks[index].completed);
        }
      });
    }
  },
  computed: {
    reversedHelloWorld() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },

    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    },

    completedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  }
});
