import add from '../add';
import {expect} from 'chai';

describe('mytest', () =>
{
  describe('#add', () =>
  {
    it('should return 23', () =>
    {
      const result = add(5, 18);

      expect(result).to.equal(23);
    });

    it('should return NaN when passing a single argument', () =>
    {
      const result = add(5);

      expect(result).to.be.NaN;
    });

    it('should concatenate strings when passing strings', () =>
    {
      const result = add('foo', 'bar');

      expect(result).to.equal('foobar');
    });
  });
});
