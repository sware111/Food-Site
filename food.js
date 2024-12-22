function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const commentText = document.getElementById('comment').value;
    if(commentText) {
        const commentsList = document.getElementById('commentsList');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        document.getElementById('comment').value = '';  
    }
});