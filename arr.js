// add Element

// let arr = [4, 6, 7, 5, 9, 8,1]
// let add = 2;
// let length = 3;

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i >= length) {
//         arr[i + 1] = arr[i];
//         if (i === length) {
//             arr[i] = add;
//         }
//     }
// }
// console.log(arr);


// remove Element

// let arr = [3, 4, 5, 8, 9]

// let remove = 2;

// for (let i = remove; i < arr.length - 1; i++) {
//     if (i == remove) {
//         arr[i] = arr[i - 1]
//     }
//     console.log(arr[i]);
// }
// console.log(arr);


// update element

// let arr = [3, 6, 5, 4, 7, 9]
// let newElement = 10;
// pos = 2;

// for (let i = 0; i < arr.length; i++) {
//     if (i == pos - 1) {
//         arr[i] = newElement;
//     }
// }
// console.log(arr);




//  print prime number of 1 to 100 //

        for (let i=1; i<=100; i++)
        {
            let found=0;
            for (let j=2; j<i/2; j++)
            {
                if(i%j==0)
                {
                    found=1;
                }
            }
            if(found==0)
            {
                console.log(i);
            }
        }
        