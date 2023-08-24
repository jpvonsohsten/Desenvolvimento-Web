const romanToInt = function(s, aniversario) {
    let int = 0
    for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case 'I':
            if (s[i + 1] === 'V') {
                int += 4
            } else if (s[i + 1] === 'X') {
                int += 9
            } else {
                int += 1
            } 
            break;

            case 'V':
            if (s[i - 1] === 'I') {
                int
            } else {
                int += 5
            }
            break;

            case 'X':
            if (s[i - 1] === 'I') {
                int
            } else if (s[i + 1] === 'L') {
                int += 40
            } else if (s[i + 1] === 'C') {
                int += 90
            } else {
                int += 10
            }
            break;

            case 'L':
            if (s[i - 1] === 'X') {
                int
            } else {
                int += 50
            }
            break;

            case 'C':
            if (s[i - 1] === 'X') {
                int
            } else if (s[i + 1] === 'D') {
                int += 400
            } else if (s[i + 1] === 'M') {
                int += 900
            } else {
                int += 100
            }
            break;

            case 'D':
            if (s[i - 1] === 'C') {
                int += 0
            }else {
                int += 500
            }
            break;

            case 'M':
            if (s[i - 1] === 'C') {
                int += 0
            } else {
                int += 1000
            }
            break;

    }
    return int
    
    
    }
}
console.log(romanToInt('IV'))
console.log(romanToInt('V'))
console.log(romanToInt('MMXXIII'))
console.log(romanToInt('X' + 'V'))
