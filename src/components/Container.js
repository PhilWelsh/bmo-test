import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  Container: {
    width: 1000,
    maxWidth: "calc(100% - 20px)",
    margin: "auto",
  },
});

const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.Container}>{children}</div>;
};

export default Container;
