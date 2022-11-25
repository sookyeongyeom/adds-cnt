import { createContext, use, useContext, useEffect, useState } from 'react';
import { ChildrenType } from '../@types/base';
import { ResultsValueType, ResultsActionsType } from '../@types/context';
import Results from '../models/Results';
import deepCopyObject from '../utils/deepCopyObject';

const ResultsValueContext = createContext<ResultsValueType>({});
const ResultsActionsContext = createContext<ResultsActionsType>([] as any);

interface tempType {
	patientId: string;
	results: Results;
}

export default function ResultsProviders({ children }: ChildrenType) {
	const [results, setResults] = useState<ResultsValueType>({});
	const actions = {
		updateResults(results: ResultsValueType) {
			setResults(results);
		},
	};

	useEffect(() => {
		console.log(results);
	}, [results]);

	return (
		<ResultsActionsContext.Provider value={actions}>
			<ResultsValueContext.Provider value={results}>{children}</ResultsValueContext.Provider>
		</ResultsActionsContext.Provider>
	);
}

export function useResultsValue() {
	const value = useContext(ResultsValueContext);
	if (value === undefined) throw new Error('ResultsValueContext.Provider is Missing');
	return value;
}

export function useResultsActions() {
	const value = useContext(ResultsActionsContext);
	if (value === undefined) throw new Error('ResultsActionsContext.Provider is Missing');
	return value;
}
