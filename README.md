# routerQuickReboot
A Node.js tool that makes AR-5310 Comtrend routers reboot 7x faster

### Benchmarks
Normal reboot through the router's control panel: Took 2 minutes and 20 seconds

A reboot using this tool: Only took 20 seconds

## How to install
- Download ChromeDriver from https://chromedriver.chromium.org/downloads

- Unzip the file and put `chromedriver.exe` file under `C:\Windows`

- Clone this repository:
```
git clone git@github.com:ExillustX/routerQuickReboot.git
```

- Change the current working directory to this repository:
```
cd routerQuickReboot
```

- Install the required dependencies:
```
npm install
```

- Rename .env.default to .env and fill in your router's IP address, username and password

- Start the tool:
```
node index.js
```
