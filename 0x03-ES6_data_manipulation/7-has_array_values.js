/**
 * Checks if all the elements in the array exist within the set
 *  @returns {Boolean}
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
