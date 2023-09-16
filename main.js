document.forms[0].onsubmit = function (e) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(document.querySelector('input').value) === false) {
        e.preventDefault();
        document.querySelector('input').style.borderColor = 'hsl(0, 93%, 68%)';
        document.querySelector('.error').style.display = 'block';
        document.querySelector('form > img').style.display = 'block';
    } else {
        document.querySelector('input').style.borderColor = 'hsl(0, 0%, 81%)';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('form > img').style.display = 'none';
        return true;
    }
}
