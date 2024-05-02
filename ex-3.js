//  Start coding here
/////////////////////////////////////
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
//////////////////////////////////////
class PostList {
  constructor(post) {
    this.post = [post];
  }
  addPost(text) {
    this.post.push(text);
  }
  sharePost() {
    console.log(`You,ve shared post ${post.title} to your friend.`);
  }
}
///////////////////////////////////////
class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }
  addComment(text) {
    this.comment.push(text);
  }
}
///////////////////////////////////////
class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    this.like++;
  }
}
///////////////////////////////////////
class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup() {
    this.groupList++;
  }
  addPage() {
    this.pageList++;
  }
}
///////////////////////////////////////
class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}
///////////////////////////////////////
class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}
///////////////////////////////////////
class Notification {
  constructor(id) {
    this.id = id;
  }
  send() {
    console.log(
      `Notification: ${comment.createdBy} has just commented on this post—"${post.title}”`
    );
  }
}
///////////////////////////////////////

///////////////////////////////////////
let user01 = new User("01", "PARN", "aaa@gmail.com");
//console.log(user01);

let postList = new PostList("TEST POST01");
postList.addPost("AAAAA");
//console.log(postList);

let post = new Post("01", "POST TITLE", "CONTENT01");
//console.log(post);
post.addComment("COMMENT01");
//console.log(post);
//postList.sharePost();

let comment = new Comment("01", "GOOD", "นายกอ");
//console.log(comment);
comment.addLike();
comment.addLike();
comment.addLike();
//console.log(comment);

let noti = new Notification("01");
noti.send();
