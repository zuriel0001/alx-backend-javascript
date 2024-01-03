export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = false; /* var changed to const */
    const task2 = true; /* no var */
  }

  return [task, task2];
}
