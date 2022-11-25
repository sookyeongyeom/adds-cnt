import { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenType } from '../@types/base';
import { CurrentPatientActionsType } from '../@types/context';

const CurrentPatientValueContext = createContext('');
const CurrentPatientActionsContext = createContext<CurrentPatientActionsType>([] as any);

export default function CurrentPatientProviders({ children }: ChildrenType) {
	const [currentPatientId, setCurrentPatientId] = useState('');
	const actions = {
		updateCurrentPatient(patientId: string) {
			setCurrentPatientId(patientId);
		},
	};

	useEffect(() => {
		console.log(`current: ${currentPatientId}`);
	}, [currentPatientId]);

	return (
		<CurrentPatientActionsContext.Provider value={actions}>
			<CurrentPatientValueContext.Provider value={currentPatientId}>
				{children}
			</CurrentPatientValueContext.Provider>
		</CurrentPatientActionsContext.Provider>
	);
}

export function useCurrentPatientValue() {
	const value = useContext(CurrentPatientValueContext);
	if (value === undefined) throw new Error('CurrentPatientValueContext.Provider is Missing');
	return value;
}

export function useCurrentPatientActions() {
	const value = useContext(CurrentPatientActionsContext);
	if (value === undefined) throw new Error('CurrentPatientActionsContext.Provider is Missing');
	return value;
}
