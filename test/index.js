const spawn = require('child_process').spawn;
const assert = require('assert');

describe('npm-has-script', () => {
  it('should exit with 0 if found', (done) => {
    const has = spawn('./npm-has-script', ['test']);
    has.on('close', (code) => {
      assert.equal(code, 0);
      done();
    });
  });
  it('should exit with 0 if found', (done) => {
    const has = spawn('./npm-has-script', ['foo', 'test/1']);
    has.on('close', (code) => {
      assert.equal(code, 0);
      done();
    });
  });
  it('should exit with 1 if not found in scripts', (done) => {
    const has = spawn('./npm-has-script', ['foo', 'test/2']);
    has.on('close', (code) => {
      assert.equal(code, 1);
      done();
    });
  });
  it('should exit with 1 if no scripts in pkg', (done) => {
    const has = spawn('./npm-has-script', ['foo', 'test/3']);
    has.on('close', (code) => {
      assert.equal(code, 1);
      done();
    });
  });
  it('should exit with 1 if pkg not found', (done) => {
    const has = spawn('./npm-has-script', ['foo', 'test/4']);
    has.on('close', (code) => {
      assert.equal(code, 1);
      done();
    });
  });
});
