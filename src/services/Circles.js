export default function Circles(total, beatNum) {
  let arrayBeat = [];

  for (let i = 0; i < beatNum; i+=1){ // gera os beats
    arrayBeat.push('1')
  }

  for (let i = beatNum; i < total; i+=1){ // gera as nao beats
    arrayBeat.push('0')
  }

  let i = 0; 
  while(arrayBeat.length!== 1){
    if(arrayBeat[i]===undefined || //reinicia a contagem se o beat observado no momento for undefined
      arrayBeat[i].startsWith('0') || // ou comeca com 0
      arrayBeat.length-1 === i || // ou e' o ultimo beat
      (arrayBeat[i]===arrayBeat[arrayBeat.length-1] && arrayBeat[0]!== arrayBeat[arrayBeat.length-1])){ // ou e' igual ao ultimo beat mas o primeiro do array nao e' igual
      i=0
    };
    const newBeat = arrayBeat[i] + arrayBeat[arrayBeat.length - 1];
    arrayBeat[i] = newBeat;
    arrayBeat.pop();
    i+=1;
  };
  return(arrayBeat);
};