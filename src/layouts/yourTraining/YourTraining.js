import React from "react";
import "./YourTraining.css";
import { AddExercise } from "./components/addExercise/AddExercise";
import { AddTrainingDay } from "./components/addTrainingDay/AddTrainingDay";
import { AddSeries } from "./components/addSeries/AddSeries";
import { ShowTrainingDays } from "./components/showTrainingDays/ShowTrainingDays";

class yourTraining extends React.Component {
  exerciseIdCounter = 3;
  state = {
    activeDate: null,
    activeExercise: null,
    exercises: [
      {
        id: 0,
        name: "Bench press"
      },
      {
        id: 1,
        name: "Pushups"
      },
      {
        id: 2,
        name: "Squats"
      }
    ],
    trainingDays: [
      {
        date: "05-12-2019"
      },
      {
        date: "06-12-2019"
      },
      {
        date: "08-12-2019"
      }
    ],
    userSeries: []
  };

  addExerciseToState = exercise => {
    this.setState({
      exercises: [...this.state.exercises, exercise]
    });
  };

  deleteExercise = id => {
    this.setState({
      exercises: this.state.exercises.filter(exercise => exercise.id !== id)
    });
  };

  addTrainingDay = date => {
    this.setState({
      trainingDays: [...this.state.trainingDays, date]
    });
  };

  addNewSeriesToRepetitions = activeSeries => {
    this.setState({
      userSeries: [
        ...this.state.userSeries.filter(
          series =>
            series.date.date !== this.state.activeDate.date ||
            series.exerciseId.id !== this.state.activeExercise.id
        ),
        activeSeries
      ]
    });
  };

  selectDate = training => {
    this.setState({ activeDate: training });
  };

  selectExercise = exercise => {
    console.log('new exe', exercise);
    this.setState({ activeExercise: exercise });
  };

  render() {
    return (
      <>
        <div className="mainContainer">
          <AddExercise
            exercises={this.state.exercises}
            selectExercise={this.selectExercise}
            addExercise={this.addExerciseToState}
            deleteExercise={this.deleteExercise}
          />
          <AddSeries
            userSeries={this.state.userSeries}
            activeDate={this.state.activeDate}
            activeExercise={this.state.activeExercise}
            getActiveSeries={this.getActiveSeries}
            addNewSeriesToRepetitions={this.addNewSeriesToRepetitions}
          />
          <AddTrainingDay
            addTrainingDay={this.addTrainingDay}
            trainingDays={this.state.trainingDays}
            selectDate={this.selectDate}
          />
        </div>
        <div className="ShowTrainingDaysContainer">
          <ShowTrainingDays
            activeExercise={this.state.activeExercise}
            userSeries={this.state.userSeries}
            trainingDays={this.state.trainingDays}
            activeDate={this.state.activeDate}
          />
        </div>
      </>
    );
  }
}

export default yourTraining;
