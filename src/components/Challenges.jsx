import React from "react";
import { connect } from "react-redux";
import { fetchChallenges, changeStatusOnProgress } from "../state/challenges";

import styles from "./Challenges.module.css";
import ChallengesList from "./ChallengesList";
import SearchBar from './SearchBar';

class Challenges extends React.Component {
  componentDidMount() {
    this.props.fetchChallenges();
  }

  handleOnProgress = (itemId, data) => {
    this.props.changeStatusOnProgress(itemId, data);
  }


  render() {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Wyzwania </h1>
        <button onClick={() => console.log(this.props.challenges)}>
          status
        </button>
        <SearchBar />
        <ChallengesList 
          challenges={this.props.challenges}
          inProgress={this.handleOnProgress}
        />
      </section> 
    );
  }
}

const mapStateProps = (state) => ({
  challenges: state.challenges.data,
});

const mapDispatchProps = {
  fetchChallenges,
  changeStatusOnProgress,
};

export default connect(mapStateProps, mapDispatchProps)(Challenges);
