function BlogDetail({ post, handleDelete, handleEdit }) {
  const { title, content } = post;

  return (
    <div>
      <span onClick={() => handleEdit()}>수정</span>
      <span onClick={() => handleDelete()}>삭제</span>
      {title}
      {content}
    </div>
  );
}

export default BlogDetail;
