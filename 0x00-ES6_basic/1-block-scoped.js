// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // No need to declare block-scoped variables here
    // as they are not used outside the block
  }

  return [task, task2];
}
