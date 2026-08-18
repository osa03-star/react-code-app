export type TestResult = {
  input: any[];
  result: any;
  expected: any;
  passed: boolean;
};
type TestCase = {
  input: unknown[];
  expected: unknown;
};

export type Challenge = {
  id: number;
  title: string;
  description: string;
  hint: string;
  code: string;
  testCases: TestCase[];
};