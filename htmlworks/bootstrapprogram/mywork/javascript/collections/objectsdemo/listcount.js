var arr=[10,10,20,20,30,32,31];
var nums={};
for(item of arr){
    if(item in nums){
        nums[item]++;

    }
    else{
        nums[item]=1
    }
}
console.log(nums);