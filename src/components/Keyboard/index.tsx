

import { useState } from 'react';
import styles from './styles.module.scss';

interface KeyboardProps {
    clearFunction: () => void;

}

export function Keyboard({ clearFunction }: KeyboardProps) {

    return (
        <section className={styles.container}>

            <button
                className={styles.function_top}
                onClick={() => clearFunction()}>
                AC
            </button>
            <button className={styles.function_top}>+/-</button>
            <button className={styles.function_top}>%</button>
            <button className={styles.function_right}>÷</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={styles.function_right}>x</button>


            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className={styles.function_right}>+</button>


            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className={styles.function_right}>-</button>


            <button className={styles.button_zero}>0</button>
            <button>,</button>
            <button className={styles.function_right}>=</button>

        </section>
    );
}