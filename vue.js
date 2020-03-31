Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    groceryList: [
      { id: 0, text: "get oranges" },
      { id: 1, text: "get apples" },
      { id: 2, text: "get peaches" }
    ]
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  },
  methods: {
    toggleMessage: function() {
      app3.seen = !app3.seen;
    }
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "get milk" },
      { text: "fill up car" },
      { text: "don't get COVID-19" }
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    note: "Hi Vue!"
  }
});
