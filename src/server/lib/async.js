export async function first(elements, ...parameters) {
  const [head, ...tail] = elements;
  if (typeof head !== 'function') {
    return;
  }
  const result = await head(...parameters);
  if (result !== null && result !== undefined) {
    return result;
  }
  return await first(tail, ...parameters);
}

