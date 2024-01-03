export default function taskBlock(trueOrFalse) {
  const task = false; //changed from var to const
  const task2 = true; //changed from var to const

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
