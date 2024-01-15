import { readFileSync } from 'fs';
import { gitmojis } from 'gitmojis';
import { resolve } from 'path';

const commitMsgFilePath = process.argv[2];
const validPrefixes = gitmojis.map((gitmoji) => gitmoji.emoji);

function isValidCommitMessage(message: string): boolean {
  return validPrefixes.some((prefix) => message.startsWith(prefix));
}

function main() {
  const commitMsg = readFileSync(resolve(commitMsgFilePath), 'utf-8').trim();
  if (!isValidCommitMessage(commitMsg)) {
    console.error(`Commit message does not start with ${validPrefixes.join(', ')}.`);
    process.exit(1);
  }
}

main();
