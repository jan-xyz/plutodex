

export const MoiaDexItemView =  (props: {
  label: string,
  counter: number,
}) => {
  const textFill = props.counter > 0 ? "rgb(255,255,255)" : "rgb(0,0,0)";
  const rectFill = props.counter > 0 ? "rgb(230,170,51)" : "rgb(240,236,228)";
  return <svg width="200" height="100">
    <rect x="0" y="0" width="200" height="100" stroke="black" stroke-width="3px" fill={rectFill}/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill={textFill}>{props.label}</text>    
  </svg>
  };