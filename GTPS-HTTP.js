//anti ddos program by dafa

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });

const http =__importStar(require("http"));
var blacklist = new Map();
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter password: ", function(password) {
    if (password === "http")
    {
    console.log("Loginned!")

    console.clear();

  //limitMemory
  const { RateLimiterMemory } = require('rate-limiter-flexible');
  const rateLimiter = new RateLimiterMemory({
      points: 5, // 5 points
      duration: 1 // per second
    });

const server = http.createServer(function (req, res) {
    if (req.url === "/growtopia/server_data.php" && req.method.toLowerCase() === "post") {
        res.writeHead(200, { 'Contect-Type': 'text/html' });
        res.write(`server|YOURIP\nport|17091\ntype|1\n#maint|GTPS HTTP By DaFa\n\nbeta_server|127.0.0.1\nbeta_port|17091\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
        res.end();
    }
}

server.listen(80);

function add_address(address) {
    blacklist.set(address, Date.now() + 5000);
}
server.on("connection", function (socket) {
    if (!blacklist.has(socket.remoteAddress)) {
        add_address(socket.remoteAddress);
    }
    else {
        var not_allowed = blacklist.get(socket.remoteAddress);
        if (Date.now() > not_allowed) {
            blacklist.delete(socket.remoteAddress);
        }
        else
        socket.destroy();
    }
});

console.clear();
server.on("listening", function () { return console.log("[!] Servers Protected by DaFa"); });
        }
else
{
    console.log("Wrong password")
    process.exit(0);
    }
    rl.close();
    });
