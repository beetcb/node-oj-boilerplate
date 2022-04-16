import { createInterface } from 'readline';

process.stdin.setEncoding('utf-8');

const input = process.stdin;
const output = process.stdout;
const rl = createInterface({
  input,
  output,
  prompt: '',
});
rl.prompt();

const println = (s: string) =>
  output.write(`${s.toString().trim()}\n`);

type ProcessedLine = any | Array<any>;

/**
 * Test manually in readline environment
 */
function test(
  solution: (...args: any[]) => any,
  options: {
    /**Handle input by line */
    lineHandler: (
      lineData: string
    ) => ProcessedLine;
    /**Handle input by test instance, default to last lineHandler returned value*/
    testInstanceHandler?: (
      /**The accumulated values returned by lineHandler */
      acc: Array<ProcessedLine>
    ) => any;
  }
) {
  const {
    testInstanceHandler = (acc) => acc?.[0],
    lineHandler,
  } = options;

  let acc: any[] = [];

  rl.on('line', (data) => {
    acc.push(lineHandler(data));
  });
  rl.on('close', () => {
    println(solution(testInstanceHandler(acc)));
  });
}

type TestArgs = Parameters<typeof test>;

export default test;
export type { TestArgs };
