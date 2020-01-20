import React from "react";
import _ from "lodash";
import "./ShowTrainingDays.css";

export class ShowTrainingDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDate: null
    };
  }

  getTrainingDaysList = (userSeries, activeExercise, activeDate) => {
    _.forEach(userSeries, (item, key) => {});
    const only = userSeries.filter(
      series => series.exerciseId.id === activeExercise.id
      //zmienić nazwe 
    );
    console.log(userSeries);

    let isValid = true;
    // _.forEach(only, (item, key) => {
    //   if (item.dateId.id !== activeDate.id) {
    //     isValid = false;
    //   }
    // });

    if (isValid) {
      return only.map(trainingDay => (
        <div key={trainingDay.date} className="trainingDayUnitHolder">
          <span
            className="trainingDay"
            onClick={() =>
              this.showRepetitions(
                this.props.userSeries,
                this.props.activeExercise,
                this.props.trainingDays
              )
            }
          >
            {trainingDay.date.date}
          </span>
        </div>
      ));
    }
  };

  showRepetitions = (userSeries, activeExercise, trainingDays) => {
    const repetitions = userSeries.filter(
      series => series.exerciseId.id === activeExercise.id
    );
    this.setState({
      //activeDate: userSeries.dateId.date
    });
  };
  render() {
    // let sets;
    // if (this.state.activeDate !== null) {
    //   sets = (
    //     <div>
    //       {activeSeries.repetitions.map((set, index) => (
    //         <span key={index}>{set + " "}</span>
    //       ))}
    //     </div>
    //   );
    // }
    return (
      <div>
        <div className="exerciseName">
          {this.props.activeExercise !== null
            ? this.props.activeExercise.name
            : null}
        </div>
        <div className="trainingDayHolder">
          {this.getTrainingDaysList(
            this.props.userSeries,
            this.props.activeExercise,
            this.props.activeDate
          )}
        </div>
      </div>
    );
  }
}
