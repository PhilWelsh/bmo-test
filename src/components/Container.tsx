import React from "react";
import { createUseStyles } from "react-jss";

type Props= {children:React.ReactNode}

const useStyles = createUseStyles({
  Container: {
    width: 1000,
    maxWidth: "calc(100% - 20px)",
    margin: "auto",
  },
});

const Container = ({children}: Props) => {
  const classes = useStyles();
  return <div className={classes.Container}>{children}</div>;
};

export default Container;
