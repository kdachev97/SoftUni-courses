function cone(radius, height) {
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  const l = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  const lateralArea = Math.PI * radius * l;
  const totalArea = lateralArea + Math.PI * Math.pow(radius, 2);

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalArea.toFixed(4)}`);
}