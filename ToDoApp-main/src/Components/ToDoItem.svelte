<script>
    export let id;
    export let text;
    export let isDone;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();



</script>

<div class="todo-item"  class:todo-item_done={isDone}>
    <input class="todo-item_checkbox" type="checkbox" on:change = {dispatch('change', {id} ) } checked={isDone}/>
    <div class="todo-item_text">{text}</div>
    <button class="todo-item_btn" on:click = {dispatch('remove', {id} ) } >Delete</button>

</div>

<style>
    .todo-item{
        background-color: rgb(250, 130, 130);
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        min-height: 50px;
        padding: 10px;
        

    }
    .todo-item_done .todo-item_text{
        text-decoration: line-through;
    }
    .todo-item_done{
        background-color: rgb(183, 246, 183);
    }

    .todo-item_checkbox{
        border: none;
        width: 25px;
        
        
    }

    .todo-item_text{
        display: flex;
        flex-grow: 0.9;
        align-items: center;
        
    }

    .todo-item_btn{
        background-color: rgb(255, 221, 0);
        border: none;
        border-radius: 10px 20px 20px 10px;
        width: 60px;


    }


</style>