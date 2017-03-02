function sampleReducer(state: any, action: any) {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return action.payload;
    default:
      return state;
  }
}

export default sampleReducer;