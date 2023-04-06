require("child_process").fork("npm", ["run", "serve"]);
setTimeout(() => {
    require("child_process").fork("npm", ["run", "open"]);
}, 1000 * 2);