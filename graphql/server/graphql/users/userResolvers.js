
export const userResolvers = {

  foo: () => {
    return [{ id: 'foo', name: 'foo' }]

  },
  hello: () => { return "hello!"; },
  bars: () => {
    return [{ id: 'me', name: 'bb' }]
  },
  
  users: () => {
    return [{ id: 'me', name: 'bar' }]
  },
  user: (id) => {
    return { id: 'br', name: 'baz' };
  }
};