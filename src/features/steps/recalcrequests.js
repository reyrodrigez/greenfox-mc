'use strict';

import { expect } from 'chai';

export default function () {

  this.When('the cache was recalculated', async function () {
    const recalcrequests = this.container.get('recalcrequests');
    await recalcrequests.recalculate();
  });

}
