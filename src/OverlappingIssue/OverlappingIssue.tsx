import { useReducer, useState } from "react";

import "./OverlappingIssue.scss";

type OverlappingIssueProps = {
  onClick: VoidFunction;
};

export const OverlappingIssue = (props: OverlappingIssueProps) => {
  const [count, setCount] = useState(0);
  const [overlapping, toggleOverlapping] = useReducer((p) => !p, true);

  return (
    <div className="OverlappingIssue__container">
      <p>
        Clicked: <span data-testid="count">{count}</span>
      </p>
      <button onClick={toggleOverlapping}>Toggle overlapping element</button>
      <div className="OverlappingIssue__content">
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            props.onClick();
          }}
        >
          Click
        </button>
      </div>
      {overlapping && <div className="OverlappingIssue__overlapping" />}
    </div>
  );
};
