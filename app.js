

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const eleList = document.querySelector('#tasks');

    console.log(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        
        if(!task){
            alert('Please enter a valid task!');
            return;
        } else{
            console.log(task);
            //create task here 
            input.value = '';
        }
    })
})