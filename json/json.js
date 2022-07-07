const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },

    {
        id: 2,
        description: "Ler",
        isCompleted: false,
    },

    {
        id: 3,
        description: "Treinar",
        isCompleted: false,
    },

];
//JSON.stringfy retorna um json  em formato de string
const todosJSON = JSON.stringify(todos);
console.log(`todosJSON: ${typeof todosJSON}`);

//Para utilizar no javascript é necessário converter pra um objeto
const todosList = JSON.parse(todosJSON);
console.log(`todosList: ${typeof todosJSON}`);


console.log(todosList);
