import styles from './styles.module.css';

type DefaultInputProps = {
    id: string;
    label?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({type, id, label, ...rest}: DefaultInputProps) {
  return (
    <>
    { label && <label htmlFor={id}>{label}</label> }
    <input type={type} id={id} {...rest} className={styles.input} />
    </>
  )
}
