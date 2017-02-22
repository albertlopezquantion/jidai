import { MomentPipe } from './moment.pipe';

import * as moment from 'moment';

fdescribe('PluralizePipe', () => {

  describe('PluralizePipe.transform', () => {
    it('Should return a plural of a singular string', () => {
      let pipe = new MomentPipe();
      expect(pipe.transform(moment('20170101'), 'D')).toBe('1');
      expect(pipe.transform(moment('20170101'), 'YYYY')).toBe('2017');
      expect(pipe.transform(moment('20170101'), 'MMMM')).toBe('enero');
      expect(pipe.transform(moment('20170101'))).toBe('ene. 01, 2017');
    });
  });
});
