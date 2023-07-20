function solution(my_string) {
    const arr = my_string.split(" ");
    let result = parseInt(arr[0]);
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] == '+'){
            result = result + parseInt(arr[i + 1]);
        }
        else if(arr[i] == '-'){
            result = result - parseInt(arr[i + 1]);
        }
    }
    return result;
}