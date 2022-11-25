import { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenType } from '../@types/base';
import { CommentsActionsType, CommentsValueType } from '../@types/context';

const CommentsValueContext = createContext<CommentsValueType>({});
const CommentsActionsContext = createContext<CommentsActionsType>([] as any);

export default function CommentsProviders({ children }: ChildrenType) {
	const [comments, setComments] = useState<CommentsValueType>({});
	const actions = {
		updateComments(comments: CommentsValueType) {
			setComments(comments);
		},
	};

	useEffect(() => {
		console.log(comments);
	}, [comments]);

	return (
		<CommentsActionsContext.Provider value={actions}>
			<CommentsValueContext.Provider value={comments}>{children}</CommentsValueContext.Provider>
		</CommentsActionsContext.Provider>
	);
}

export function useCommentsValue() {
	const value = useContext(CommentsValueContext);
	if (value === undefined) throw new Error('CommentsValueContext.Provider is Missing');
	return value;
}

export function useCommentsActions() {
	const value = useContext(CommentsActionsContext);
	if (value === undefined) throw new Error('CommentsActionsContext.Provider is Missing');
	return value;
}
