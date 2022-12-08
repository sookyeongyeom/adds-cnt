import '../styles/reset.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from '../modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../modules/index';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
