let sol = (function solution(str) {
    let out = [];
    let b = ``;
    let x = 0;

    for (let i = 0; i <= str.length; i++) {
        if (x !== 2) {
            x++
            b += str[i]
        } else {
            x = 0;
            out.push(b);
            b = ``;
            b += str[i];
            x++
        }
    }
    if (str.length % 2 !== 0) out.push(str[str.length - 1] + `_`)

    return out
})();


console.log(solution(`abcdws`));
console.log(sol(`abcdws`));