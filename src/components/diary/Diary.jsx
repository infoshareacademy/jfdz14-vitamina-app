import React from "react";
import DiaryChart from "./DiaryChart";
import ButtonAdd from "./ButtonAdd";
import DeleteIcon from '@material-ui/icons/Delete';
import SearchAppBar from './SearchAppBar';
import DiaryForm from './DiaryForm';
import styles from './Diary.module.css';

class Diary extends React.Component {
  state = {
    chartValue: [
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 0},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 2.5},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 5},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 0},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 7.5},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 8},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 10},
      {name: `${new Date().getDate()}.${new Date().getMonth()+1}`, nastrój: 5},
    ],
    postId: 0,
    posts: [],
    diaryForm: false,
  }

  componentDidMount() {
    if(localStorage.length > 0) {
      const getPosts = localStorage.getItem('POSTS');
      const POSTS = JSON.parse(getPosts);
      this.setState({
        posts: POSTS,
        postId: POSTS.length,
      })
    } else {
      return null;
    }
  }

  handleOnClickToForm = () => {
    this.setState({
      diaryForm: true,
    })
  }

  handleClickLeaveForm = () => {
    this.setState({
      posts: this.state.posts,
      diaryForm: false,
      postId: this.state.postId,
    })
  }

  handleClickSaveInForm = (title, description) => {
    const newId = this.state.posts.length + 1;

    this.setState({
      posts: [{
        id: newId,
        date: new Date().toLocaleDateString(),
        title: title,
        description: description,
      }, ...this.state.posts],
      diaryForm: false,
      postId: newId,
    })

    const newPost = [{
      id: newId,
      date: new Date().toLocaleDateString(),
      title: title,
      description: description,
    }, ...this.state.posts]
    localStorage.setItem('POSTS', JSON.stringify(newPost));
  }

  handleClickDelete = (e) => {
    const key = 'delete' + e.currentTarget.id;
    const elementId = e.target.id;
    if(elementId.includes(key)) {
      console.log(`wcisnołeś usuń`);
      const newPosts = this.state.posts.filter(post => post.id != e.currentTarget.id.toString());
      console.log(newPosts);
      this.setState({
        posts: newPosts,
      })
      localStorage.setItem('POSTS', JSON.stringify(newPosts));
    } else {
      console.log('div - nic tu nie usuniesz');
    }
  }

  render() {
    return (
      <>
      {
        !this.state.diaryForm
        ? <section className={styles.diary__section}>
            <header className={styles.diary__header}>
              <h1 className={styles.diary__header__title}>Twój dziennik nastrojów:</h1>
              <DiaryChart value={this.state.chartValue}/>
              <ButtonAdd onClickToForm={this.handleOnClickToForm}/>
            </header>
            <main>
              <SearchAppBar />
              <div>
                  {
                    this.state.posts.map(post => (
                      <div id={post.id} className={styles.diary__post__box} key={post.id} onClick={this.handleClickDelete}>
                        <div className={styles.diary__post__content}>
                          <h3 className={styles.post__title}>{post.title}</h3>
                          <span className={styles.post__date}>{post.date}</span>
                          <p>{post.description}</p>
                        </div>
                        <div>
                          <button id={`delete${post.id}`} className={styles.diary__post__button__delete}>usuń</button>
                        </div>
                      </div>
                    ))
                  }
              </div>
            </main>
          </section>
        : <DiaryForm 
            onClickSaveInForm={this.handleClickSaveInForm}
            onClickLeaveTheForm={this.handleClickLeaveForm}
            />
      }

      </>
    );
  }
}


export default Diary;
