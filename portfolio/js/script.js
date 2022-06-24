let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function () {
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);

    saveComments();
    showComments();

    event.preventDefault();

}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}


function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function (item) {
        out += `<p class="time-js"><em>${timeConverter(item.time)}</em></p>`;
        out += `<p class="name-js" >${item.name}</p>`;
        out += `<p class="body-js" >${item.body}</p>`;
    });

    commentField.innerHTML = out;

}

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

/* Буду рад любому отзыву! Как и хорошему так и плохому! Конструктивная критика способствует личностному и профессиональному росту! P.S. Но только если она конструктивная;) */