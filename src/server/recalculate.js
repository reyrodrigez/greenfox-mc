import container from './container';
import VError from 'verror';

const statistics = container.get('statistics');

async function recalculate() {
  await requestMonitor.registerIncomingRequest('url');
  await requestMonitor.registerIncomingRequest('url');
  await requestMonitor.registerIncomingRequest('url');

  await statistics.recalculate();
  console.log(await requestMonitor.getStatistics());
}

recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
