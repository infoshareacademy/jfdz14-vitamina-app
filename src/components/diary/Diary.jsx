import React from "react";
import DiaryForm from './DiaryForm';
import DiaryDashboard from "./DiaryDashboard";

class Diary extends React.Component {
  state = {
    chartValue: [{
      chartId: 1,
      value: 0,
      date: 0,
    }],
    postId: 1,
    posts: [{
      id: 1,
      date: new Date().toLocaleDateString(),
      title: 'Jak się dziś czujesz?',
      description: 'To mieisce na Twoje przemyślenia, wraenia i doznania, których doświadczasz kadego dnia...',
    }],
    diaryForm: false,
    postFilter: '',
  }


  componentDidMount() {
    const getPosts = localStorage.getItem('POSTS');
    const POSTS = JSON.parse(getPosts);
    const getChartValue = localStorage.getItem('DiaryChartValue')
    const VALUE = JSON.parse(getChartValue);

    if(Object.keys(localStorage).includes("DiaryChartValue") && VALUE.length > 0){
      this.setState({
        chartValue: VALUE,
        posts: POSTS,
        postId: POSTS.length,
      })
    } else {
      this.setState({
        chartValue: [{
          chartId: 1,
          value: 0,
        }],
        postId: 1,
        posts: [{
          id: 1,
          date: new Date().toLocaleDateString(),
          title: 'Jak się dziś czujesz?',
          description: 'To mieisce na Twoje przemyślenia, wraenia i doznania, których doświadczasz kadego dnia...',
        }],
      })
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
    const newValue = value;
    if(value <= 0) {
      value = 0;
    } else {
      value = newValue
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
      const newPosts = this.state.posts.filter(post => post.id != e.currentTarget.id);
      const newValue = this.state.chartValue.filter(value => value.chartId != e.currentTarget.id)

      this.setState({
        chartValue: newValue,
        posts: newPosts,
      })

      localStorage.setItem('POSTS', JSON.stringify(newPosts));
      localStorage.setItem('DiaryChartValue', JSON.stringify(newValue));
    }
  }

  handleSearch = (text) => {
    this.setState({
      postFilter: text,
    })
  }


  render() {
    return (
      <>
        {
          !this.state.diaryForm
          ? <DiaryDashboard
              posts={this.state.posts}
              postFilter={this.state.postFilter}
              data={this.state.chartValue}
              onKeyUpSearch={this.handleSearch}
              onClickToForm={this.handleOnClickToForm}
              onClickedDelete={this.handleClickDelete}
            />
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
