import React from 'react';
import DiaryFormChart from './DiaryFormChart';
import styles from './Diary.module.css';

class DiaryForm extends React.Component {
  state = {
    post: {
      title: '',
      description: '',
    }
  }

  handleChangeInput = (e) => {
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
    this.props.onClickSaveInForm(title, description);
  }


  render() {
    return (
      <>
        <section className={styles.diary__section}>
          <header className={styles.diary__header}>
            <h1 className={styles.diary__header__title}>Jak się dziś czujesz?</h1>
            <div className={styles.daily__value__box}>
              tu będzie input z oceną dnia
              <DiaryFormChart />
            </div>
          </header>
          <main>
            <form className={styles.diary__form}>
              <div className={styles.form__header}>
                <input 
                type='text' 
                placeholder='Tytył wpisu'
                className={styles.form__input} 
                autoComplete='off'
                onChange={this.handleChangeInput}
                required ={true}
                />
              </div>
              <textarea 
                maxLength={360}
                placeholder='To jest mieisce na Twoje dzisiejsze przemyślenia, postanowienia, odczucia, lub cokolwiek tylko zechcesz.' 
                className={styles.form__textarea} 
                onChange={this.handleChangeTextarea}
                />
              <div className={styles.form__button__box}>
                <button
                  className={styles.form__button}
                  onClick={this.handleOnClickLeaveForm}
                >Anuluj</button>
                <button type='submit'
                className={styles.form__button}
                onClick={this.handleOnClickSaveForm}
                >Zapisz</button>
              </div>
            </form>
          </main>
        </section>
      </>
    );
  }
}


export default DiaryForm;




