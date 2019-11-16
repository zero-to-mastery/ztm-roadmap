import React from "react";
import "./App.css";
import { questions } from "./questions";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: questions[0],
      courses: [],
      isImpossibleToPlease: false
    };
  }

  changeQuestion(question, userAnswer) {
    if (!question instanceof Object) {
      return console.log("Not a Question Object");
    }
    if (userAnswer) {
      if (this.state.currentQuestion.truth !== null) {
        this.setState({
          currentQuestion: questions[this.state.currentQuestion.truth],
          courses: []
        });
      } else {
        this.setState({
          currentQuestion: null,
          courses: this.state.currentQuestion.course
        });
      }
    } else {
      if (this.state.currentQuestion.false) {
        this.setState({
          currentQuestion: questions[this.state.currentQuestion.false],
          courses: []
        });
      } else {
        this.setState({
          currentQuestion: null,
          courses: [],
          isImpossibleToPlease: true
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {this.state.currentQuestion ? (
            <div className="card">
              <h1>{this.state.currentQuestion.ques}</h1>
              <button
                onClick={() =>
                  this.changeQuestion(this.state.currentQuestion, true)
                }
              >
                Yes
              </button>
              <button
                onClick={() =>
                  this.changeQuestion(this.state.currentQuestion, false)
                }
              >
                No
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="course">
            {this.state.courses.map((course, i) => (
              <div className="card">
                <img src={course.thumbnail} alt="" />
                <a href={course.udemy_url} key={i}>
                  {course.name}
                </a>
              </div>
            ))}
          </div>
          {this.state.isImpossibleToPlease ? (
            <h1>
              I gave up! You are imposible to please! Have a Great Day ahead!
            </h1>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
