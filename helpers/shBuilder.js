var fs = require("fs");

const buildSh = (code, params = [], name) => {
    result = [`echo "${code.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')}" > ${name}.cpp`];
    result.push(`g++ ${name}.cpp -o ${name}exe`); 
    result.push(`chmod +x ${name}exe`);
    for(let i = 0; i<params.length ; i++){
        result.push(`param${i}=${params[i]}`);
    }
    result.push(`./${name}exe <<EOF`);
    for(let i = 0; i<params.length ; i++){
        result.push(`$param${i}`);
    }
    result.push(`EOF`);
    result.push(`rm ${name}exe`);
    result.push(`rm ${name}.cpp`);
    return result.join('\n');
}

exports.createShFile = (name, code, params = [], callback) => {
    fs.writeFile(`${name}.sh`,buildSh(code,params,name),callback)
}