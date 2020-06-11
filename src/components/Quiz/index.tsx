import * as React from 'react';

import styles from './Quiz.module.scss'
import { Button } from '../common/Button/inidex';

interface Answer {
	id: number,
	answer: string,
	emoji: string,
}

interface Quiz {
	id: number,
	question: string,
	answers: Answer[],
	correctAnswerId: number,
}

interface QuizProps {
	quiz: Quiz[]
}

export const Quiz: React.FunctionComponent<QuizProps> = ({
	quiz,
}) => {
	const [currQuestion, setCurrentQuestion] = React.useState(0)

	function goToNextQuestion() {
		setCurrentQuestion(curr => curr + 1)
	}
	return (
	<div className={styles.quizRoot}>
		{
			quiz.map(currenQuestion => (
				currenQuestion.id === currQuestion ? (
					<div className={styles.oneQuestion}>
						<h1>
							{
								currenQuestion.question
							}
						</h1>
						<ul className={styles.btnList}>
							{
								currenQuestion.answers.map(currentAnswer => (
									<li>
										<Button
											onClick={() => goToNextQuestion()}
											label={currentAnswer.answer}
											emoji={currentAnswer.emoji}
										/>
									</li>
								))
							}
						</ul>
					</div>
				) : undefined
			))
		}
	</div>
	)
}