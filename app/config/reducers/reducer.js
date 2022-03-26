export default function reducer(state = 0, action) {
  if (action.type === 'addDay') return state + 1;
  return state;
}
