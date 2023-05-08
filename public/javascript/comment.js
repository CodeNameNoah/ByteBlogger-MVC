const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentTextArea = document.querySelector('textarea[name="comment-body"]');
  const commentText = commentTextArea.value.trim();
  const postId = window.location.toString().split('/').pop();

  if (commentText) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id: postId,
        comment_text: commentText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', commentFormHandler);
