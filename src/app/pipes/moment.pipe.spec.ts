import { MomentPipe } from './moment.pipe';

import * as moment from 'moment';

describe('MomentPipe', () => {

  describe('MomentPipe.transform', () => {
    it('Should return a date time formated.', () => {
      let pipe = new MomentPipe();
      expect(pipe.transform(moment('20170101'), 'D')).toBe('1');
      expect(pipe.transform(moment('20170101'), 'YYYY')).toBe('2017');
      expect(pipe.transform(moment('20170101'), 'MMMM')).toBe('enero');
      expect(pipe.transform(moment('20170101'))).toBe('ene. 01, 2017');
    });
  });
});
