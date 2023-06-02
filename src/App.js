import SocialMediaButtons from './components/SocialMediaButtons';
import HelmetMetaData from './components/HelmetMetaData';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

	const [state, stateSet] = useState(0)

	useEffect(() => {
		stateSet(prev => prev + 1)
	}, [])

	return (
		<>
			<HelmetMetaData
				title="123"
				image="https://www.imgonline.com.ua/examples/random-pixels-big.png"
				state={state}
			/>
			<SocialMediaButtons />
		</>
	);
}

export default App;
