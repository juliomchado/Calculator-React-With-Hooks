
import styles from './styles.module.scss';

interface DisplayProps {
    value: number;
}

export function Display({ value = 0 }: DisplayProps) {
    
    return (
        <section className={styles.display}>
            <p>{value}</p>
        </section>
    );
}