import React from 'react';
import DiaryFormChart from './DiaryFormChart';
import styles from './Diary.module.css';

class DiaryForm extends React.Component {
  state = {
    chartValue: {
      value: 0,
    },
    post: {
      title: '',
      description: '',
    }
  }

  handleChangeCharForm = (value) => {
    this.setState({ 
     chartValue: {
       value: value,
     },
    });
  }


  handleChangeInput = (e) => {
    e.preventDefault();
    this.setState({
      post:{
        title: e.target.value,
        description: this.state.post.description,
      }
    });
  }

  handleChangeTextarea = (e) => {
    this.setState({
      post: {
        title: this.state.post.title,
        description: e.target.value,
      }
    })
  }

  handleOnClickLeaveForm = () => {
    this.props.onClickLeaveTheForm();
  }

  handleOnClickSaveForm = () => {
    const title = this.state.post.title;
    const description = this.state.post.description;
    const value = this.state.chartValue.value;
    this.props.onClickSaveInForm(title, description, value);
  }


  render() {
    return (
      <>
        <section className={styles.diary__section}>
          <header className={styles.diary__header}>
            <h1 className={styles.diary__header__title}>Jak się dziś czujesz?</h1>
            <div className={styles.daily__value__box}>
              <DiaryFormChart onChangeInForm={this.handleChangeCharForm}/>
            </div>
          </header>
          <main>
            <form className={styles.diary__form}>
              <div className={styles.form__header}>
                <input
                className={styles.form__input}
                type='text'
                placeholder='Tytył wpisu'
                autoFocus={true}
                autoComplete='off'
                onChange={this.handleChangeInput}
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                required ={true}
                />
              </div>
              <textarea
                className={styles.form__textarea}
                maxLength={1000}
                placeholder='To jest mieisce na Twoje dzisiejsze przemyślenia, postanowienia, odczucia, lub cokolwiek tylko zechcesz.' 
                onChange={this.handleChangeTextarea}
                />
              <div className={styles.form__button__box}>
                <button className={styles.form__button} onClick={this.handleOnClickLeaveForm}>
                  Anuluj
                </button>
                <button type='submit' className={styles.form__button} onClick={this.handleOnClickSaveForm}>
                  Zapisz
                </button>
              </div>
            </form>
          </main>
        </section>
      </>
    );
  }
}


export default DiaryForm;




