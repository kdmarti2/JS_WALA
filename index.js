
const esprima = require('esprima');
const escodegen = require('escodgen');


const { normalize } = require('/normalizer/lib/normalizer.js');

//does not crash
exports.ssa_transform = function (input) {
    let results = {}
    try {    
        let ast = esprima.parseScript(input);
        let ast2 = normalize(ast);
        let src = escdoegen.generate(ast2);
        results.error = "success"
        results.msg = src;
    } catch (err) {
        results.error = "fail"
        results.msg = err
    } finally {
        return results;
    }

}
