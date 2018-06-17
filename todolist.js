let TodoCount = 3;
let DoneCount = 0;

$('#todo-list').on('click', '.todo-list-item', function () {
    let selectedTodoElement = $(this);
    selectedTodoElement.hide();

    //debugger;
    // --TodoCount: First decrease the counter by 1 and then print its value
    $('#TodoCounter').text(--TodoCount);
    $('#DoneCounter').text(++DoneCount);

    $('#done-list').append($('<li class="done-list-item"></li>').text(selectedTodoElement.text()));
});

$('#done-list').on('click', '.done-list-item', function (event) {
    let selectedDoneElement = $(this);
    selectedDoneElement.hide();

    //debugger;
    $('#TodoCounter').text(++TodoCount);
    $('#DoneCounter').text(--DoneCount);

    $('#todo-list').append($('<li class="todo-list-item"></li>').text(selectedDoneElement.text()));
});

$('#newItemButton').on('click', function () {
    let newItem = $('#newItem');

    //debugger;
    if (newItem.val() === '') {
        $('#errorLabel').text('Please provide a valid (non empty) list item').append($('<br><br>'));
        return;
    }
    $('#errorLabel').hide();
    //debugger;
    //Use the val() function to get/set text from/to a form input. The .text() method cannot be used on form inputs or scripts. 
    //To set or get the text value of input or textarea elements, use the.val() method.
    //To get the value of a script element, use the.html() method.
    $('#todo-list').append($('<li class="todo-list-item"></li>').text(newItem.val()));
    $('#TodoCounter').text(++TodoCount);
    $('#newItem').val('');

});