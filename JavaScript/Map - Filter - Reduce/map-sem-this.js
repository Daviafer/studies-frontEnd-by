function mapSemThis(arr){
  return arr.map(function (item) {
    return item * 2;
  });
}
const nums = [2,4,5,6,12];
console.log(mapSemThis(nums));