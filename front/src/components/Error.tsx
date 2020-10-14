import React from "react";

interface ErrorProps {
  message: string;
}

function Error(props: ErrorProps) {
  const { message } = props;
  return message !== "" ? <div>{props.message}</div> : <></>;
}

export default Error;
