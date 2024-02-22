function worldRecord(input) {
  let recordToBeatSeconds = Number(input[0]);
  let distanceMeters = Number(input[1]);
  let timeSecondsMeter = Number(input[2]);
  let time = distanceMeters * timeSecondsMeter;
  let addedTime = (Math.floor(distanceMeters / 15)) * 12.5;
  let totalTime = time + addedTime;
  if (totalTime < recordToBeatSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
  } else {
    console.log(`No, he failed! He was ${(totalTime - recordToBeatSeconds).toFixed(2)} seconds slower.`)
  }
}