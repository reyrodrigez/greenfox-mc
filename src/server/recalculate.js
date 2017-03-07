import container from './container';
import VError from 'verror';

const statistics = container.get('statistics');

requestMonitor.recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
