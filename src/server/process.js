import container from './container';
import VError from 'verror';

function process() {
	const statistics = container.get('statistics');
	statistics.subscribe();
	console.log('Successfully subscribed to incoming requests queue');
}

process();
