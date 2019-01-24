import mapChooser from '../mapChooser';

describe('mapChooser', function() {
  it('returns image name when location is passed to it', function() {
    let expected = 'portland.png';
    let actual = mapChooser('portland');
    expect(actual).toEqual(expected);
  })

  it('returns default name when no location is passed to it', function() {
    let expected = 'none.png';
    let actual = mapChooser('');
    expect(actual).toEqual(expected);
  })
}

)