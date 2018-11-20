async function genSamples(n, sizes) {
  let samples: any = [];
  let numel = sizes.reduce((a, b) => a * b);
  for (let j = 0; j < n; j++) {
    let x = new Float32Array(numel);
    for (let i = 0; i < numel; i++) {
      x[i] = Math.random();
    }
    samples.append(x);
  }
  return samples;
}

export { genSamples };
