import React from "react";
import styles from "./ChatBox.module.css";
import InputBar from "../../components/InputBar/InputBar";
import Body from "../../components/Body/Body";

const ChatBox = (props) => {
  return (
    <>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.header} ${styles.item}`}>
              <h2>Hey, Let's Have a Word ..! </h2>
            </div>
            <Body />
            <InputBar />
          </div>
        </div>
    </>
  );
};

export default ChatBox;
