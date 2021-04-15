const validateCode = require('./validateCode')

test('properly validates code', () => {
        expect(validateCode("QTW43", ["darn","rats","ugh","egg","fuzzy","kthx","haha", "cheese"], ["QTW41", "QTW42"])).toBe(true),
        expect(validateCode("K42THX", ["darn","rats","ugh","egg","fuzzy","kthx","haha", "cheese"], ["QTW41", "QTW42"])).toBe(false),
        expect(validateCode("QTW42", ["darn","rats","ugh","egg","fuzzy","kthx","haha", "cheese"], ["QTW41", "QTW42"])).toBe(false)
    })
