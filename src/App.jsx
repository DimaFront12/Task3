import Style from './App.module.css';
import { useState } from 'react';
export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState(0);
	const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const handleOperand = (item) => {
		if (!operator) {
			setOperand1(operand1 + item);
		} else {
			setOperand2(operand2 + item);
		}
	};

	const clearResult = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	};

	const calculateResult = () => {
		switch (operator) {
			case '+':
				setResult(+operand1 + +operand2);
				break;
			case '-':
				setResult(+operand1 - +operand2);
				break;
		}
	};

	return (
		<div className={Style.app}>
			<p className={Style.result}>{`${
				!result
					? operand1
						? `${operand1} ${operator} ${operand2}`
						: '0'
					: result
			}`}</p>
			<div className={Style.buttons}>
				<div className={Style['numbers-with-clear']}>
					<button className={Style.clear} onClick={clearResult}>
						C
					</button>
					<div className={Style.numbers}>
						{nums.reverse().map((item) => (
							<button key={item} onClick={() => handleOperand(item)}>
								{item}
							</button>
						))}
					</div>
				</div>
				<div className={Style.operations}>
					<button className={Style.operator} onClick={() => setOperator('+')}>
						+
					</button>
					<button className={Style.operator} onClick={() => setOperator('-')}>
						-
					</button>
					<button className={Style.operator} onClick={calculateResult}>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
