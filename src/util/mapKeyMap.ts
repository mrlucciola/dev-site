type ArrMap<U = any> = (
  callbackfn: (value: number, index: number, array: number[]) => U,
  thisArg?: any
) => U[];

export const arrLenMap: <U>(_: U[] | number) => ArrMap<U> = <U>(
  arrOrNum: U[] | number
) => {
  const arrLen = typeof arrOrNum === "number" ? arrOrNum : arrOrNum.length;
  return Array.from(Array(arrLen).keys()).map;

  // const projectElems = Array.from(Array(projectLen).keys()).map((idx) => {
  //   return <NavProject projectIdx={idx} key={`nproj-${idx}`} />;
  // });
};
