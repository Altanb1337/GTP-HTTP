//const httpCodes = [300, 302, 307, 301, 200, 666, 598];//

const readline = require("readline");
const http = require('http');
var blacklist = new Map();
var visit = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const title = require("node-bash-title");
title("GTPS HTTP (C) DaFa");

rl.question("Enter password: ", function(password) {
    if (password === "http")
    {
    console.log("Loginned!")

    console.clear();

const server = http.createServer(function(req, res) {
    let ip = req.connection.remoteAddress;
    ip = ip.split(/::ffff:/g).filter(a => a).join('');
    if (req.url == "/growtopia/server_data.php") {
        if (req.url = "post") {
            visit++;
            res.write(`server|IPSERVER\nport|17091\ntype|1\n#maint|HTTP NodeJS\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|CloudFlare\nRTENDMARKERBS1001`);
            res.end();
            console.log(`[LOGS]\n[!] IP: ${ip}\n[!] Method: ${req.method}\n[!]`);
        }
    }
    else {
        res.writeHead(307);
        res.write(`<script>alert('HTTP BY DAFA');</script><pre>Your ip (${ip})\nGTPS HTTP (C) DaFa`)
        res.end()
        req.destroy();
    }
})

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

console.log(`Setup HTTP...`);

console.clear();

console.log("HTTP (C) DaFa")
}
else
{
    console.log("Wrong password")
    process.exit(0);
    }
    rl.close();
    });