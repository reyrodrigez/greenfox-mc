import container from './container';
import VError from 'verror';

const requestMonitor = container.get('requestmonitor');

requestMonitor.recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
