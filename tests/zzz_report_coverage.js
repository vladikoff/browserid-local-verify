/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global describe,it,require */

if (!process.env.NO_COVERAGE) {
  var
  should = require('should'),
  ass = require('ass'),
  fs = require('fs');

  describe('code coverage', function() {
    it('tests should exceed 92.7% coverage', function(done) {
      ass.report('json', function(err, r) {
        should.not.exist(err);
        (r.percent).should.be.above(92.7);
        done();
      });
    });

    it('coverage.html should be written', function(done) {
      ass.report('html', function(err, html) {
        should.not.exist(err);
        fs.writeFileSync('coverage.html', html);
        done();
      });
    });
  });
}
