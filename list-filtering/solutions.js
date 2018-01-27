'use strict';

return l.reduce(function(a, b) {
    if (typeof b === 'number') a.push(b);
    return a;
  }, []);
}