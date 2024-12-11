
<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();


    let inputValue = '';

    function onClick(){
        if(inputValue.length){
            dispatch('add', {text: inputValue});
            inputValue='';
        }
    }

</script>


<div class="todo-controls">
    
    <input class="todo-controls_input" type="text" bind:value={inputValue}>
    <button class="todo-controls_btn" on:click = {onClick} >Добавить</button>



</div>


<style>
    .todo-controls{
        display: grid;
        grid-template-columns: 70% 30%;
        height: 40px;
        
    }
    .todo-controls_input{
        border: none;
        border-radius: 20px 0 0 20px;
        padding: 15px;
    }
    .todo-controls_btn{
        border: none;
        border-radius: 0 20px 20px 0;
        background-color: rgb(255, 221, 0);
    }

</style>