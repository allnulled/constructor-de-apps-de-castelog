require("child_process").spawn("npm", ["run", "serve"]);
setTimeout(() => {
    require("child_process").spawn("npm", ["run", "open"]);
}, 1000 * 2);