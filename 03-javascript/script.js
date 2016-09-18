window.onload = function () {
    document.querySelector('#content>button').addEventListener('click', function () {
        // get value from document
        var valueInInputField = ' ' + document.querySelector('#content>input').value;
        // set the content to the content appended with the value we read from the input field
        document.querySelector('#content>p').innerHTML = document.querySelector('#content>p').innerHTML + valueInInputField;
        // make the field empty again
        document.querySelector('#content>input').value = ''; 
    });
}
