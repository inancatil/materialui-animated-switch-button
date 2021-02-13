import * as React from "react";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Theme } from "@material-ui/core/styles";   
import { Button } from "@material-ui/core";
import { usePrevious } from "./usePrevious";

const useDarkToggleStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  root: {
    position: "absolute",
  },
  enterAnim: {
    animation: `$enterAnim 1000ms ${theme.transitions.easing.easeInOut}`,
    transform: "translateY(0)",
  },
  exitAnim: {
    animation: `$exitAnim 1000ms ${theme.transitions.easing.easeInOut}`,
    transform: "translateY(50px)",
  },
  "@keyframes enterAnim": {
    "0%": {
      transform: "translateY(50px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  "@keyframes exitAnim": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(50px)",
    },
  },
}));


  
 
export default function DarkModeToggle() {
  const isMobileSize = false;
  const classes = useDarkToggleStyles(); 
  const isDarkMode = true;
  const prevMode = usePrevious(isDarkMode);
  const enableAnim = isDarkMode !== prevMode && isMobileSize;

  

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent={!isMobileSize ? "left" : "center"}
      alignItems="center"
      marginLeft={2}
      marginRight={2}
      style={{ cursor: "pointer" }}
      onClick={() => {}}
    >
      <IconButton
        disableTouchRipple
        disableRipple
        disableFocusRipple
        className={classes.iconButton}
      >
        <Box
          style={{
            transform: !isDarkMode ? "translateY(50px)" : "translateY(0)",
          }}
          className={clsx(
            classes.root,
            {
              [classes.enterAnim]: isDarkMode && enableAnim,
            },
            {
              [classes.exitAnim]: !isDarkMode && enableAnim,
            }
          )}
        > 
          <Button style={{ color: "#ffeb3b" }}>Light</Button>
        </Box>
        <Box
          style={{
            transform: !isDarkMode ? "translateY(0)" : "translateY(50px)",
          }}
          className={clsx(
            classes.root,
            {
              [classes.enterAnim]: !isDarkMode && enableAnim,
            },
            {
              [classes.exitAnim]: isDarkMode && enableAnim,
            }
          )}
        > 
          <Button color="primary">Light</Button>
        </Box>
      </IconButton>
    </Box>
  );
}
