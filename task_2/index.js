class CascadingPalindrome {
    constructor(input) {
      if (typeof input !== 'string') {
        throw new Error('Input must be a string');
      }
      this.input = input;
    }
  
    isPalindrome(str) {
      const len = str.length;
      for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
          return false;
        }
      }
      return true;
    }
  
    findPalindrome() {
      const components = this.input.split(' ');
      let longestPalindrome = '';
  
      for (let i = 0; i < components.length; i++) {
        for (let j = i; j < components.length; j++) {
          const subString = components.slice(i, j + 1).join(' ');
          if (this.isPalindrome(subString) && subString.length > longestPalindrome.length) {
            longestPalindrome = subString;
          }
        }
      }
  
      return longestPalindrome;
    }
  }
  
  