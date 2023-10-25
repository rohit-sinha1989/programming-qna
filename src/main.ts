import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <br /><br />
    <a href="#">
<i class="la la-trash" id="sumOfTwoNumbers" (click)="sumOfTwoNumbers(10,20)"> 
1. Sum of Two Numbers</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="checkPalindrom" (click)="checkPalindrom('MADAM')"> 
2. Check Palindrom</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="getFactorial" (click)="getFactorial(5)"> 
3. Factorial</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="isPrime" (click)="isPrime(12)"> 
4. Prime</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="reverseString" (click)="reverseString('japan')"> 
5. Reverse String</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="fibonacci" (click)="fibonacci(5)"> 
6. Fibonacci</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="fibonacci" (click)="checkAnagrams('silent','listen')"> 
7. Anagrams</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="fibonacci" (click)="sumOfArrayElement([1,2,3,4,5])"> 
8. Sum of All elemnets of an Array</i></a>
<br /><br />

<a href="#">
<i class="la la-trash" id="fibonacci" (click)="sumOfArrayElement([1,2,3,4,5])"> 
9. Ascending Sorting of numbers</i></a>
<br /><br />
  `,
})
export class App {
  name = 'Angular';

  // Sum of 2 numbers
  sumOfTwoNumbers(a: any, b: any) {
    const firstNum = a;
    const secondNum = b;
    console.log(parseInt(firstNum + secondNum));
  }
  //End

  //Check Plaindrom of a number or String
  checkPalindrom(input: any) {
    //Method: 1
    //console.log(str === str.split('').reverse().join(''));

    //Method: 2
    const str1 = input.toString();
    for (let i = 0, j = str1.length - 1; i < j; i++, j--) {
      if (str1[i] !== str1[j]) {
        console.log('False');
        return false;
      }
      console.log('True');
      return true;
    }
    //End
  }

  // Reverse a Given String
  reverseString(input: any) {
    //Method: 1

    //console.log(input.split("").reverse().join(""));

    //Method: 2
    var string = input.toString();
    let revString = '';

    for (let i = string.length - 1; i >= 0; i--) {
      revString += string[i];
      console.log(revString);
    }
    //End
  }

  // Factorial of a number

  getFactorial(input: any) {
    // Method:1
    let answer: any = 1;
    if (input == 0 || input == 1) {
      console.log(answer);
      return answer;
    } else if (input > 1) {
      for (let i = input; i >= 1; i--) {
        answer = answer * i;
      }
      console.log(answer);
      return answer;
    } else {
      console.log(answer);
      console.log('Number has to be positive');
    }

    //End

    // Method: 2
  }

  // Prime Number - To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime.

  isPrime(n: any) {
    // Corner case
    if (n <= 1) {
      console.log('False');
      return false;
    }

    // Check from 2 to n-1
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        console.log('False');
        return false;
      }
    }
    console.log('True');
    return true;
  }

  //Fibonacci Series
  fibonacci(input: any) {
    // Method: 1
    // let first = 0;
    // let second = 1;
    // let third = 0;
    // console.log(first);
    // for (let i = 1; i <= input - 1; i++) {
    //   third = first + second;
    //   console.log(third);
    //   first = second;
    //   second = third;
    // }
    //End

    // Method: 2

    let sequence = [0, 1];

    while (sequence.length < input) {
      // console.log("Total",sequence.length);
      // console.log("1",sequence[sequence.length - 1]);
      // console.log("2",sequence[sequence.length - 2]);
      let nextNumber =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];

      sequence.push(nextNumber);
      //console.log("New Length",sequence);
    }
    console.log(sequence);
    return sequence;
  }

  // Anagrams of String

  /*
  An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other. Examples: Input: str1 = “listen” str2 = “silent” 
  */

  checkAnagrams(str1: any, str2: any) {
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
      console.log('Anagrams');
    } else {
      console.log('Not Anagrams');
    }
  }

  // Sum of all numbers in array

  sumOfArrayElement(arr: any) {
    console.log(arr.reduce((sum: any, num: any) => sum + num, 0));
  }

  ascendingSort(numbers: any) {
    return numbers.sort((a: any, b: any) => a - b);
  }
}

bootstrapApplication(App);
