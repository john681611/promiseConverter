const findInText = text => {
    const regex = /\w*\(\)\.then\(function \(\) \{/g;
    const matches = [];
    let match = regex.exec(text);
    while (match != null) {
        matches.push(match[0]);
        match = regex.exec(text);
    } 
    return matches;
}

module.exports = {
    findInText
}