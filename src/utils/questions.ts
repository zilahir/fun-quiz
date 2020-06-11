export const questions = {
	allQuestions: [
		{ id: 0, question: 'Who is your favourite colleague at Salesframe?', 
			answers: [
				{ id: 1, answer: 'Richi', emoji: '😻', },
				{ id: 2, answer: 'Richard Zilahi', emoji: '😍', },
				{ id: 2, answer: 'Richard', emoji: '🥰', },
			],
			correctAnswerId: 1,
		},
		{ id: 1, question: 'Who is the best developer you know?' ,
			answers: [
				{ id: 1, answer: 'Richi', emoji: '💕' },
				{ id: 2, answer: 'Richard Zilahi', emoji: '💕' },
				{ id: 2, answer: 'Richard', emoji: '💕' },
			],
			correctAnswerId: 1,
		},
		{ id: 2, question: 'Do you want to invite me for a beer?',
			answers: [
				{ id: 1, answer: 'Yes', emoji: '🍺' },
				{ id: 2, answer: 'Absolutely', emoji: '🍺🍺' },
				{ id: 2, answer: 'HELL YEAH', emoji: '🍻' },
		],
		correctAnswerId: 1,
		},
	],
	getAllQuestions: () => questions.allQuestions
}