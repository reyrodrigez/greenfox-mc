import container from './container';
import VError from 'verror';

const requestMonitor = container.get('requestmonitor');

async function recalculate() {
  await requestMonitor.registerIncomingRequest('url');
  await requestMonitor.registerIncomingRequest('url');
  await requestMonitor.registerIncomingRequest('url');

  await requestMonitor.recalculate();
  console.log(await requestMonitor.getStatistics());
}

recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
