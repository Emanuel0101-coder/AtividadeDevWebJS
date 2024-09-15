document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const postCommentButton = document.getElementById('post-comment');
    const commentsSection = document.getElementById('comments-section');
    
    function createComment(content, isUserComment = false) {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        if (isUserComment) {
            comment.classList.add('user');
        }
        
        const username = document.createElement('div');
        username.classList.add('username');
        username.textContent = isUserComment ? 'Você' : 'Outro Usuário';
        
        const timestamp = document.createElement('div');
        timestamp.classList.add('timestamp');
        timestamp.textContent = new Date().toLocaleTimeString();
        
        const text = document.createElement('div');
        text.classList.add('text');
        text.textContent = content;
        
        comment.appendChild(username);
        comment.appendChild(timestamp);
        comment.appendChild(text);
        
        commentsSection.appendChild(comment);
        commentsSection.scrollTop = commentsSection.scrollHeight; 
    }
    
    postCommentButton.addEventListener('click', () => {
        const content = commentInput.value.trim();
        if (content) {
            createComment(content, true); 
            commentInput.value = ''; 
        }
    });
    
    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            postCommentButton.click();
        }
    });
});