import s from "../FindContact/FindContact.module.css";

export default function FindContact(props) {
  const findInputChange = (ev) => {
    props.onChange(ev.target.value.toLowerCase());
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.input} onChange={findInputChange} />
    </label>
  );
}
