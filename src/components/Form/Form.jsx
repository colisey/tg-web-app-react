import { useCallback, useEffect, useState, FC } from "react";
// import { FormProps } from "./Form.props";
import { UseTelegram } from "../../core/hooks/useTelegram";
import styles from "./Form.module.css";
// import { InputEventType, SelectElementType } from "../../core/types/types";


export const Form = (props) => { //: FC<FormProps> 
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("");
  const { tg } = UseTelegram();

  

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: `Отправить данные`,
    });
  }, []);
  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCoutry = (e) => { // : InputEventType
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => { //: SelectElementType
    setSubject(e.target.value);
  };

  return (
    <div className={styles.form} {...props}>
      <h3>Введите ваши данные</h3>
      <span className={styles.error}>Естественно поля могут быть любые</span>
      <input
        onChange={onChangeCoutry}
        className={styles.input}
        type="text"
        placeholder={"Страна"}
        value={country}
      />
      <input
        onChange={onChangeStreet}
        className={styles.input}
        type="text"
        placeholder={"Улица"}
        value={street}
      />
      {/* <input className={styles.input} type="text" placeholder={'Страна'}/> */}
      <select onChange={onChangeSubject} className={styles.select}>
        <option value="phisical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </div>
  );
};
