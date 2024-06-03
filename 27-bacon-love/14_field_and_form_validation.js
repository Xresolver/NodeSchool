module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
    
    const fieldAValid = fieldA.scan(false, (prev, changedValue) => (prev || validationA(changedValue)));
    const fieldBValid = fieldB.scan(true, (prev, changedValue) => (changedValue?validationB(changedValue):true));
    const fieldCValid = fieldC.scan(false, (prev, changedValue) => (prev || validationC(changedValue)));
    
    return {
        fieldAValid: fieldAValid, //The validity of field A
        fieldBValid: fieldBValid, //The validity of field B
        fieldCValid: fieldCValid, //The validity of field C
        formValid: fieldAValid.and(fieldBValid).and(fieldCValid)    //The validity of the whole form
    };
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = (Bacon, fieldA, validationA, fieldB, validationB, fieldC, validationC) => {
//     const a = fieldA.map(validationA).toProperty(false);
//     const b = fieldB.map(value => value ? validationB(value) : true).toProperty(true);
//     const c = fieldC.map(validationC).toProperty(false);

//     const form = a.and(b).and(c);

//     return {
//         fieldAValid: a,
//         fieldBValid: b,
//         fieldCValid: c,
//         formValid: form
//     };
// };