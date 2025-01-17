const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.size = 0;
    this.limit = options.limit;
  }

  _transform(chunk, encoding, callback) {
    this.size += chunk.length;
    return this.size > this.limit
      ? callback(new LimitExceededError())
      : callback(null, chunk);
  }
}

module.exports = LimitSizeStream;
