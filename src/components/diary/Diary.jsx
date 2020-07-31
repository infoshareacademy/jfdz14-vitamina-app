import React from "react";
import DiaryChart from "./DiaryChart";
import ButtonAdd from "./ButtonAdd";
import SearchAppBar from './SearchAppBar';
import DiaryForm from './DiaryForm';
import styles from './Diary.module.css';

class Diary extends React.Component {
  state = {
    chartValue: [{
      chartId: 0,
      value: 0,
      date: 0,
    }],
    postId: 0,
    posts: [],
    diaryForm: false,
  }

  componentDidMount() {
    if(localStorage.length > 0) {
      const getPosts = localStorage.getItem('POSTS');
      const POSTS = JSON.parse(getPosts);
      const getChartValue = localStorage.getItem('DiaryChartValu')
      const VALUE = JSON.parse(getChartValue);
      if(POSTS.length > 0) {
        this.setState({
          chartValue: VALUE,
          posts: POSTS,
          postId: POSTS.length,
        })
      } else {
      this.setState({
        chartValue: [{
          chartId: 0,
          value: 0,
          date: 0,
        }],
        postId: 0,
        posts: [],
        diaryForm: false,
      })
    }
  }
}

  handleOnClickToForm = () => {
    this.setState({
      diaryForm: true,
    })
  }

  handleClickLeaveForm = () => {
    this.setState({
      chartValue: this.state.chartValue,
      posts: this.state.posts,
      diaryForm: false,
      postId: this.state.postId,
    })
  }

  handleClickSaveInForm = (title, description, value) => {
    const newId = this.state.posts.length + 1;
    if(value <= 0) {
      value = 0;
    } else {
      value = value
    }

    title.length <= 0
    ? this.setState({
      chartValue: this.state.chartValue,
      posts: this.state.posts,
      diaryForm: true,
      postId: this.state.postId,
      })
    : this.setState({
        chartValue: [...this.state.chartValue, {
            chartId: newId,
            value: value,
            date: `${new Date().getDate()}.${new Date().getMonth()+1}`,
          }],
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
      }, ...this.state.posts];

      const newChartValue = [...this.state.chartValue,
        {
        chartId: newId,
        value: value,
        date: `${new Date().getDate()}.${new Date().getMonth()+1}`,
      }]

    if(title.length > 0) {
      localStorage.setItem('POSTS', JSON.stringify(newPost));
      localStorage.setItem('DiaryChartValue', JSON.stringify(newChartValue));
    }
  }

  handleClickDelete = (e) => {
    const key = 'delete' + e.currentTarget.id;
    const elementId = e.target.id;
    if(elementId.includes(key)) {
      console.log(`wcisnołeś usuń`);
      const newPosts = this.state.posts.filter(post => post.id != e.currentTarget.id);
      const newValue = this.state.chartValue.filter(value => value.chartId != e.currentTarget.id)
      console.log(newPosts);
      this.setState({
        chartValue: newValue,
        posts: newPosts,
      })
      localStorage.setItem('POSTS', JSON.stringify(newPosts));
      localStorage.setItem('DiaryChartValue', JSON.stringify(newValue));
    }
    // } else {
    //   console.log('div - nic tu nie usuniesz');
    // }
  }

  render() {
    return (
      <>
      {
        !this.state.diaryForm
        ? <section className={styles.diary__section}>
            <header className={styles.diary__header}>
              <h1 className={styles.diary__header__title}>Twój dziennik nastrojów:</h1>
              <DiaryChart data={this.state.chartValue}/>
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
            // chartValue={this.state.chartValue}
            // onChangeInForm={this.handleChangeCharForm}
            onClickSaveInForm={this.handleClickSaveInForm}
            onClickLeaveTheForm={this.handleClickLeaveForm}
            />
      }

      </>
    );
  }
}


export default Diary;
