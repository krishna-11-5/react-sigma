export function emi(P, R, N) {
  const monthlyRate = R / 1200;
  return (P * monthlyRate * Math.pow(1 + monthlyRate, N)) /
         (Math.pow(1 + monthlyRate, N) - 1);
}
