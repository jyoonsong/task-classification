import React from "react";

import { Centered } from "meteor/empirica:core";
import InstructionText from "./InstructionText";

export default class Instruction extends React.Component {

  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          
          <InstructionText />

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} >
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
