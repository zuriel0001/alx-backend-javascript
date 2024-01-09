/**
 * returns a string of all the set values that start with a specific string
 */
const cleanSet = (set, startString) => {
	  const strings = [];

	  if (startString === '' || typeof startString !== 'string') return '';
	  set.forEach((s) => {
		      if (typeof s === 'string' && s.startsWith(startString)) {
			            strings.push(s.slice(startString.length));
			          }
		    });
	  return strings.join('-');
};

export default cleanSet;
