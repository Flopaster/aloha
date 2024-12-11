<script>
	import { onMount } from "svelte";
	import ToDoContols from "./ToDoContols.svelte";
	import ToDoItem from "./ToDoItem.svelte";
    import {todoApiModule} from '../lib/api';

    let items = loadData();

    function loadData(){
        return todoApiModule.getToDos();
    }
    
    async function createToDo(event){
        await todoApiModule.createToDo({
            text: event.detail.text,
            is_done: false
        });
        items = loadData();
    }

    async function removeToDo(event){
        await todoApiModule.removeToDo(event.detail.id);
        items = loadData();
    }

    async function changeStatus(event){
        await todoApiModule.changeStatus(event.detail.id);
        items = loadData();
    }









    // let id = 0;
    


    // function onChangeStatus(event){
    //     const item = items.find((i) => i.id === event.detail.id);
    //     item.isDone = !item.isDone;
    //     items=items;
    //     localStorage.setItem('items', JSON.stringify(items));
    //     }
    
    // function onAddItem(event){
    //     const item = {
    //         id: id++,
    //         text: event.detail.text,
    //         isDone: false
    //     };
    //     items.push(item);
    //     items=items;
    //     localStorage.setItem('items', JSON.stringify(items));
    // }

    // function onDeleteItem(event){
    //     const idx = items.findIndex( (i) => i.id === event.detail.id);
    //     items.splice(idx, 1);
    //     items=items;
    //     localStorage.setItem('items', JSON.stringify(items));
    // }

    // console.log(items);

    // onMount(()=>{
    //     if(localStorage.key('items')){
    //         items = JSON.parse(localStorage.getItem('items'));
    //     }
    //     if(items.length){
    //     items.forEach((i) => {
    //         if( id < i.id){
    //             id = i.id;
    //         }
            
    //     })
    //     id++
    //     }
    // });



</script>
<div class="todo-app">
    {#await items}
        Loading...
    {:then value}
        <ToDoContols on:add = {createToDo}/>
        <div class="todo-app_field">
            {#each value as item }
                <ToDoItem id={item.id} text={item.text} bind:isDone={item.is_done} on:remove={removeToDo} on:change = {changeStatus}/>
            {/each}
        </div>
    {/await}
</div>

<style>
    .todo-app{
        min-width: 700px;
        background-color: rgb(170, 170, 170);
        height: 700px;
        border-radius: 40px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        
    }

    .todo-app_field{
        background-color: white;
        flex-grow: 1;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 15px;
        overflow-y: auto;
        
    }





</style>